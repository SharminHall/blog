import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import home from './modules/home'
import article from './modules/article'
import aboutMe from './modules/aboutMe'
import user from './modules/user'
Vue.use(Vuex)

const getters = {
  token: state => state.user.token,
  isHome: state => state.home.isHome,
  bgColor: state => ['#f8f4eb', '#ebf3f8', '#ebf7ef', '#faf2f1'][ state.app.bgColorIndex ]
}

export function createStore () {
  return new Vuex.Store({
    getters,
    modules: {
      app,
      home,
      article,
      aboutMe,
      user
    },
  })
}
