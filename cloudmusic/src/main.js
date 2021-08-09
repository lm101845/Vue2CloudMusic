/*
 * @Author: liming
 * @Date: 2021-08-10 03:43:56
 * @LastEditTime: 2021-08-10 05:09:02
 * @FilePath: \Vue2CloudMusic\cloudmusic\src\main.js
 */

import Vue from 'vue'
import App from './App'
// import router from './router'
import './common/stylus/index.styl'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render:h=>h(App)
//   router,
//   components: { App },
//   template: '<App/>'
})
