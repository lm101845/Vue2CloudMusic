/* eslint-disable indent */
<!--
 * @Author: liming
 * @Date: 2021-09-08 19:23:47
 * @LastEditTime: 2021-10-01 17:05:49
 * @FilePath: \cloudmusic\src\components\tab\Tab.vue
-->
<template>
  <div class="tab">
    <!-- 导航栏里面写router-link -->
    <router-link tag='div' class='tab-items' to='/recommend'>
    <!-- tag是router-link的一个属性，它可以让router-link最终渲染为什么样的标签，默认是a标签，这里我们把它改为div-->
      <span class='tab-link'>推荐</span>
    </router-link>

    <router-link tag='div' class='tab-items' to='/singer'>
      <span class='tab-link'>歌手</span>
    </router-link>

    <router-link tag='div' class='tab-items' to='/rank'>
      <span class='tab-link'>排行</span>
    </router-link>

    <router-link tag='div' class='tab-items' to='/search'>
      <span class='tab-link'>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tab'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable';
  // @import必须要在第一行
  //   stylus不需要写分号，冒号，逗号，花括号！！！

        // flex属性是子元素flex-basis/flex-grow,flex-shrink的缩写
        // flex: 1，即元素尺寸可以弹性增大，也可以弹性变小，具有十足的弹性，但是在尺寸不足时会优先最小化内容尺寸，
        // (如果所有项目的flex-grow属性都设置为1，那么它们会均分剩余的空间)
        // flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
        // 当 flex-basis 值为 0 % 时，项目尺寸会被认为是0，因此无论项目尺寸设置多少都用；
        // flex:1<==>flex-grow:1,flex-shrink:1,flex-basis:0%
  .tab
    display flex
    height 44px
    line-height 44px
    // background-color pink
    font-size $font-size-medium
    .tab-items
    // 样式没有生效，找了半天，原来我写成了.tab-item，少写了个s！！！
       flex: 1
       text-align center
       .tab-link
          padding-bottom 5px
          color $color-text-l
        &.router-link-active
         .tab-link
            color $color-theme
            border-bottom 2px solid $color-theme
        //当我们选择某个路由标签，这个标签的类名就被激活，名字就叫router-link-active
</style>