import Vue from 'vue'
import Vuex from 'vuex'
import apidoc from './modules/apidoc'
import user from './modules/user'
Vue.use(Vuex)

const getters = {
  token: state => state.user.token
}

const store = new Vuex.Store({
  modules: {
    apidoc,
    user
  },
  getters
})

export default store
