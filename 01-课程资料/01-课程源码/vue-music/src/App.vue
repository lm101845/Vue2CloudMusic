<!--
 * @Author: liming
 * @Date: 2021-08-10 02:41:52
 * @LastEditTime: 2021-09-08 14:10:12
 * @FilePath: \Vue2CloudMusic\01-课程资料\01-课程源码\vue-music\src\App.vue
-->
<template>
  <div id="app" @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Player from 'components/player/player'
  import Tab from 'components/tab/tab'

  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>