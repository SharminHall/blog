const article = {
  actions: {
    FETCH_ARTICLE: ({commit}) => {
      commit('setIsHome', false)
      return Promise.resolve()
    }
  }
}

export default article
