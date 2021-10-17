/* eslint-disable no-trailing-spaces */
/*
 * @Author: liming
 * @Date: 2021-08-10 03:43:56
 * @LastEditTime: 2021-10-01 17:04:55
 * @FilePath: \cloudmusic\src\router\index.js
 */
// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(Router)
// 注册组件——我决定不在这里注册，在main.js里面注册

import Rank from 'pages/rank/Rank'
import Recommend from 'pages/recommend/Recommend'
import Search from 'pages/search/Search'
import Singer from 'pages/singer/Singer'

export default new VueRouter({
  //   一共有4个路由，对应4个组件:推荐、歌手、排行、搜索
  // 注意：组件名外面不能写引号！！！
  routes: [
    {
      // 我们在这里配置一个根的router,默认会调到recommend
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },  
    {
      path: '/search',
      component: Search
    }  
  ]
})
