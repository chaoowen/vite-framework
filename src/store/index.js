import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      showAlert: {
        success: false,
        error: false,
        warning: false
      }
    }
  },
  getters: {
    showAlert(state) {
      return state.showAlert;
    }
  },
  mutations: {
    handleShowAlert(state, type) {
      state.showAlert[type] = true;
      setTimeout(() => {
        state.showAlert[type] = false;
      }, 1000);
    }
  },
  actions: {
    handleShowAlert({ commit }, type) {
      commit('handleShowAlert', type);
    }
  }
})

export default store;