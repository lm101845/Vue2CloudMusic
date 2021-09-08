<!--
 * @Author  liming
 * @Date  2021-09-08 13 55 58
 * @LastEditTime: 2021-09-08 21:50:23
 * @FilePath: \Vue2CloudMusic\02-代码手敲\cloudmusic\src\components\myheader\MyHeader.vue
-->
<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">cloud Music</h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable';
  @import '~common/stylus/mixin';
// ~表示后面的是别名

.m-header 
    position relative
    // 相对定位：相对于其【原】文档流的位置进行定位——自恋型：停职留薪，占有位置，不脱标
    height 44px
    text-align  center
    // color $color-theme
    font-size  0
    // border  1px solid red
    // font-size  0的作用是避免莫名其妙的间距。
    // 没给宽，默认全屏
    .icon
        display  inline-block
        //inline-block的元素特点：inline-block 的元素既具有 block 元素可以设置宽高的特性，同时又具有 inline 元素默认不换行的特性。当然不仅仅是这些特性，比如 inline-block 元素也可以设置 vertical-align 属性。简而言之：
        //inline-block 后的元素就是一个格式化为行内元素的块容器( Block container )
        vertical-align top
        // vertical-align top生效的要求：作用环境：父元素设置line-height。
        // 父元素（inline-block\block）必须含有line-height（inline元素有无皆可），子元素中的（inline-block/inline元素）vertical-align才能起作用。
        //vertical-align不可继承，必须对子元素单独设置。
        margin-top 6px
        // border  1px dashed blue
        width 30px
        height 32px
        margin-right 9px
        // 这个margin-right 9px是怎么算出来的啊？？？
        bg-image('logo')
        //见mixin.styl,它帮你设置好了
        background-size 30px 32px
    .text
        display inline-block
        vertical-align top
        line-height 44px
        font-size  $font-size-large
        color $color-theme
        // 必须要设置一下字体大小，不然它不出来
</style>