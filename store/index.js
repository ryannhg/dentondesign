import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      isOpenNavigation: false
    }),
    getters: {
      isOpenNavigation: (state) => { return state.isOpenNavigation }
    },
    mutations: {
      toggleNavigation (state) {
        state.isOpenNavigation = !state.isOpenNavigation
      },
      updateNavigation (state, payload) {
        state.isOpenNavigation = payload
      }
    }
  })
}

export default createStore
