<!--
 * @Author: liming
 * @Date: 2021-09-08 18:52:09
 * @LastEditTime: 2021-10-17 14:20:27
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\pages\singer\Singer.vue
-->
<template class="singer">
    <div>歌手页面</div>
</template>

<script>
// import {getSingerList} from '../../api/singer'
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
// ERR_OK是一个常量，表示0
export default {
  name: 'Singer',
  data() {
    return {
      singers: []
    }
  },
  created() {
    this._getSingderList()
  },
  methods: {
    _getSingderList() {
      // 在这里调用api里面的getSingderList这个方法
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers)
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position fixed
    top 88px
    bottom 0
    width 100%
</style>
