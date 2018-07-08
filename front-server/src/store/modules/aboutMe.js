const aboutMe = {
    actions: {
      FETCH_ABOUTME: ({commit}) => {
        commit('setIsHome', false)
        return Promise.resolve()
      }
    }
  }
  
  export default aboutMe
  