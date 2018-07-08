const state = {
  isHome: true
}

const mutations = {
  setIsHome(state, isHome) {
    state.isHome = isHome
  }
}

const actions = {
  FETCH_HOME: ({state, commit}) => {
    commit('setIsHome', true)
    return Promise.resolve()
  }
}

export default {
  state,
  mutations,
  actions
}
