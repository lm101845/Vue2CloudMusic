<!--
 * @Author: liming
 * @Date: 2021-08-10 03:43:56
 * @LastEditTime: 2021-08-10 05:30:21
 * @FilePath: \Vue2CloudMusic\cloudmusic\src\App.vue
-->
<template>
  <div id="app">
    你好
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    // @import "./common/stylus/variable"
    @import "common/stylus/variable"
    // 给common起别名，这样就可以使用绝对路径了
    #app
        color:$color-theme
</style>
