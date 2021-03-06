const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const base = require('./webpack.base.config')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const PassThrough = require('stream').PassThrough
process.env.NODE_ENV === 'development'

const readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8')
  } catch (e) {}
}

module.exports = function setupDevServer (app, cb) {
  let bundle, clientManifest
  let resolve

  const readyPromise = new Promise(r => { resolve = r })
  const ready = (...args) => {
    resolve()
    cb(...args)
  }

  // modify client config to work with hot middleware
  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  //增加后台热更新
  clientConfig.output.filename = '[name].js'
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )

  // dev middleware
  const clientCompiler = webpack(clientConfig)
  const oldDevMiddleware = require('webpack-dev-middleware')(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    noInfo: true
  })
  const devMiddleware = () => {
    return async (ctx, next) => {
      await oldDevMiddleware(ctx.req, {
        end: (content) => {
          ctx.body = content
        },
        setHeader: (name, value) => {
          ctx.set(name, value)
        }
      }, next)
    }
  }
  app.use(devMiddleware())

  clientCompiler.plugin('done', stats => {
    const fs = oldDevMiddleware.fileSystem
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    if (stats.errors.length) return

    clientManifest = JSON.parse(readFile(
      oldDevMiddleware.fileSystem,
      'vue-ssr-client-manifest.json'
    ))
    if (bundle) {
      ready(bundle, {
        clientManifest,
      })
    }
  })

  // hot middleware
  const hotMiddleware = (compiler, opts) => {
    const middleware = require('webpack-hot-middleware')(compiler, opts);
    return async (ctx, next) => {
      let stream = new PassThrough()
      ctx.body = stream
      await middleware(ctx.req, {
        write: stream.write.bind(stream),
        writeHead: (status, headers) => {
          ctx.status = status
          ctx.set(headers)
        }
      }, next)
    }
  }
  app.use(hotMiddleware(clientCompiler, { heartbeat: 5000 }))

  // watch and update server renderer
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    if (stats.errors.length) return

    // read bundle generated by vue-ssr-webpack-plugin
    bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
    if (clientManifest) {
      ready(bundle, {
        clientManifest,
      })
    }
  })

  return readyPromise
}
