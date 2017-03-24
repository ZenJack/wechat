import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Wechat from 'components/wechat/wechat'
import Discover from 'components/discover/discover'
import Contact from 'components/contact/contact'
import Search from 'components/search/search'
import Me from 'components/me/me'
import Account from 'components/account/account'
import Nickname from 'components/nickname/nickname'
import DemoSelect from 'components/demo/demoSelect'
import DemoPug from 'components/demo/demoPug'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Wechat
    },
    {
      path: '/wechat',
      component: Wechat
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/nickname',
      component: Nickname
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/demo-select',
      component: DemoSelect
    },
    {
      path: '/demo-pug',
      component: DemoPug
    }
  ]
})
