/*
 * @Author: liming
 * @Date: 2021-08-10 03:43:56
 * @LastEditTime: 2021-09-08 19:21:29
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\main.js
 */
import 'babel-polyfill'
// 注意：这句话要写在第一行！！！
// babel-polyfill通过向全局对象和内置对象的prototype上添加方法来实现的。所以这会造成全局空间污染。
// 业务 js 中： 在webpack.config.js配置的主入口index.js文件的最顶层键入import 'babel-polyfill'即可
// babel-runtime不需要写在源码中的

import fastclick from 'fastclick'

import Vue from 'vue'
import App from './App'

// 引入VueRouter——它是一个插件库，需要use一下
import VueRouter from 'vue-router';


// 引入路由器(一个应用有一个路由器就够了)
// 因为是index.js,所以后面的可以不写
import router from './router';

import './common/stylus/index.styl'

//应用插件
Vue.use(VueRouter);

fastclick.attach(document.body);
// 这样写了之后移动端就没有300毫秒延迟了

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
})
