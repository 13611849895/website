// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
// Vue.use(axios)
Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  // 全局状态
  state: {
    state: {
      tab: 'all',
      articleList: [],
      collectTopics: [],
      isLoading: true,
      isMore: false,
      isShowAsideMenu: false,
      isShowLogin: false,
      isShowInfo: false,
      isShowMsg: false,
      isShowNewArticle: false,
      isShowAbout: false,
      scrollTop: 0,
      // userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', success: false},
      ak: localStorage.ak || ''
    }
  },
  mutations: {
    changeTab (state, payload) {
      state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading
      state.tab = payload.type || state.tab
      state.articleList = payload.articleList || state.articleList
    },
    viewArcticle (state, flag) {
      state.isLoading = flag
    },
    changeMore (state, flag) {
      state.isMore = flag
    },
    changeScrollTop (state, scrollTop) {
      state.scrollTop = scrollTop
    },
    showAsideMenu (state, flag) {
      state.isShowAsideMenu = flag
    },
    // showLogin (state, flag) {
    //   state.isShowLogin = flag
    // },
    showInfo (state, flag) {
      state.isShowInfo = flag
    },
    showMsg (state, flag) {
      state.isShowMsg = flag
    },
    showNewArticle (state, flag) {
      state.isShowNewArticle = flag
    },
    showAbout (state, flag) {
      state.isShowAbout = flag
    },
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    updateAk (state, ak) {
      state.ak = ak
    },
    updateCollect (state, collectTopics) {
      state.collectTopics = collectTopics
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
