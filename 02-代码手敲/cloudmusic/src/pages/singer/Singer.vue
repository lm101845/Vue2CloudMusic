<!--
 * @Author: liming
 * @Date: 2021-09-08 18:52:09
 * @LastEditTime: 2021-10-23 19:27:19
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\pages\singer\Singer.vue
-->
<template class="singer">
  <div>歌手页面</div>
</template>

<script>
// import {getSingerList} from '../../api/singer'
import { getSingerList } from '@/api/singer'
import { ERR_OK } from '@/api/config'
import Singer from '@/common/js/singer'
const HOT_NAME = '热门'
const HOT_SINGER_LEN = 10
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
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singers = res.data.list
          console.log(this.singers, '输出this.singers')
          console.log('=================')
          console.log(this._normalizeSinger(this.singers)) // 这个是调用一下函数
        }
      })
    },
    _normalizeSinger(list) {
      // 首先遍历list
      // map是一个对象
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          // 在10条数据之内我们都给它添加到items里面
          // map.hot.items.push({
          //   id: item.Fsinger_mid,
          //   name: item.Fsinger_name,
          //   // avatar:`https://y.qq.com/music/photo_new/T001R500x500M0000025NhlN2yWrP4.jpg?max_age=2592000`
          //   avatar: `https://y.qq.com/music/photo_new/T001R500x500M000${item.Fsinger_mid}.jpg?max_age=2592000`
          // })

          map.hot.items.push(
            new Singer({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            })
          )
        }
        const key = item.Findex
        // Findex为人名首字母【A-Z】
        if (!map[key]) {
          // 如果对象map没有key属性的话，给map赋予key属性，并且值为一个对象
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(
          new Singer({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          })
        )
      })
      console.log(map, 'map ===============')
      // 为了得到有序列表，我们需要处理map
      // 它有2个部分，一个是热门部分，一个是按顺序排列的部分
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
          // 通过对map的遍历，我们就得到了2块的数组
        }
      }
      // 对数组进行排序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        // 使用 charCodeAt() 方法可以查看指定码元的字符编码。这个方法返回指定索引位置的码元值，索引以整数指定。
      })
      
      return hot.concat(ret)
      // concat() ，用于将一个或多个字符串拼接成一个新字符串。
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
