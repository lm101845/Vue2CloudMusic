<!--
 * @Author: liming
 * @Date: 2021-08-10 03:43:56
 * @LastEditTime: 2021-10-17 14:08:43
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\App.vue
-->
<template>
  <div id="app">
    <!-- 你好世界！！！！ -->
    <!-- <router-view/> -->
   <MyHeader/>
   <Tab/>
   <!-- router渲染的一些组件在这里展示 -->
   <router-view/>
  </div>
</template>

<script>
import MyHeader from 'components/myheader/MyHeader'
import Tab from 'components/tab/Tab'
// 老师上面这种写法，属于决定路径，但是我写了它报错——我们配置一个别名就好了
// import MHeader from './components/m-header/m-header'
// 这里我写相对路径是可以的
export default {
  name: 'App',
  components: {MyHeader, Tab}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    // @import "./common/stylus/variable"
    // 给common起别名，这样就可以使用绝对路径了
    // @import "common/stylus/variable"
    // #app
    //     color:$color-theme

    // 这些样式都可以不在这里写了，可以删掉了
</style>
