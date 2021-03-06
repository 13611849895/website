import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    SETUSERINFO (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    setUserInfo ({commit}, user) {
      commit('setUserInfo', user)
    }
  }
})

export default userStore
