const app = {
  state: {
    bgColorIndex: 0
  },
  mutations: {
    setBgColorIndex(state, index) {
      state.bgColorIndex = index % 4
    }
  }
}

export default app
