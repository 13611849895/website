// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
// Vue.use(axios)
Vue.use(moment)
Vue.prototype.$axios = axios
Vue.prototype.changeTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds', '分钟')
Vue.use(Vuex)
Vue.config.productionTip = false

let store = new Vuex.Store({
  // 全局状态
  state: {
    state: {
      tab: 'all',
      articleList: [],
      isLoading: true,
      isShowLogin: false
    }
  },
  mutations: {
    changeTab (state, payload) {
      state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading
      state.tab = payload.type || state.tab
      state.articleList = payload.articleList || state.articleList
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
