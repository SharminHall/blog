const Koa = require('koa')
const app = new Koa()
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const LRU = require('lru-cache')
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')
const template = fs.readFileSync('./src/index.template.html', 'utf-8')
const isProd = process.env.NODE_ENV === 'production'

// 配置的私人api接口
const api = require('./server/routes/index');

// 私人的中间件
const middleware_res_formatter = require('./server/middlewares/response_formatter');

onerror(app)

function createRenderer(bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    template: template,
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    basedir: resolve('./dist'),
    runInNewContext: false
  }))
}
let renderer
let readyPromise
if (isProd) {
  const bundle = require('./dist/front/vue-ssr-server-bundle.json')
  const clientManifest = require('./dist/front/vue-ssr-client-manifest.json')
  renderer = createRenderer(bundle, {
    clientManifest
  })
} else {
  readyPromise = require('./build/setup-dev-server')(app, (bundle, options) => {
    renderer = createRenderer(bundle, options)
  })
}
function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => err ? reject(err) : resolve(html))
  })
}

// 跨域解决
app.use(cors({
  origin: '*',
  allowMethods: ['PUT','POST','GET','DELETE','OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/static'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 私人的middlewares
app.use(async (ctx, next) => {
  try {
    const context = {
      title: 'sal', // default title
      url: ctx.url
    }
    // 将服务器端渲染好的html返回给客户端
    ctx.body = await renderToString(context)

    // 设置请求头
    ctx.set('Content-Type', 'text/html')
    ctx.set('Server', 'Koa2 server side render')
    
  } catch (e) {
    // 如果没找到，放过请求，继续运行后面的中间件
    console.log('----------------------render err')
    await next()
  }
});
app.use(middleware_res_formatter('^/api'));

// routes
app.use(api.routes(), api.allowedMethods())

app.listen(3001)
  .on('listening', () => console.log('服务已启动 3001'))
  .on('error', err => console.log(err))
