import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    component: _import('home/home'),
  },
  {
    path: '/aboutme',
    component: _import('aboutMe/aboutMe')
  },
  {
    path: '/artlist',
    component: _import('article/articleList'),
  },
  {
    path: '/article/:id',
    component: _import('article/article'),
    name: 'article'
  }
]

export function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}
