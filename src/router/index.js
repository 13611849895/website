import Vue from 'vue'
import Router from 'vue-router'
// ---------跳转页面----------
import Novice from '../pages/Novice/Novice'
import About from '../pages/About/About'
import Interface from '../pages/Interface/Interface'
import Entry from '../pages/Entry/Entry'
import Register from '../pages/Register/Register'
import Home from '../pages/Home/Home'
import Article from '../pages/article/article'
import User from '../pages/User/User'
import NewArticle from '../components/panel/NewArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/novice',
      name: 'Novice',
      component: Novice
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/interface',
      name: 'Interface',
      component: Interface
    },
    {
      path: '/entry',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/newarticle',
      name: 'NewArticle',
      component: NewArticle
    }
  ]
})
