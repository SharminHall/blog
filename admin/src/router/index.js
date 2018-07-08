import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: _import('views/home/home'),
    children: [
      {
        path: '/explain',
        component: _import('components/explain/explain'),
        name: 'explain'
      },
      {
        path: '/push',
        component: _import('components/push/push'),
        name: 'push'
      },
      {
        path: '/api/page:id',
        component: _import('views/home/component/apiPage'),
        name: 'apiPage',
        props: true
      }
    ]
  }
]

export default new Router({
  routes
})
