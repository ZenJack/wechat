<template>
  <div class="discover" ref="discoverScroll">
    <div class="wraaper">
      <ul class="title-bar">
        <li class="item">
          <i class="icon-home2"></i>
          <span class="title">扫一扫</span>
        </li>
        <li class="item">
          <i class="icon-compass"></i>
          <span class="title">摇一摇</span>
        </li>
      </ul>

      <ul class="title-bar">
        <li class="item">
          <i class="icon-search"></i>
          <span class="title">购物</span>
        </li>
        <li class="item">
          <i class="icon-compass2"></i>
          <span class="title">游戏</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'discover',
  created () {
    this.$nextTick(() => {
      this.discoverScroll = new BScroll(this.$refs.discoverScroll, {
        click: true
      })
    })
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .discover
    position: absolute
    top: 48px
    bottom: 56px
    width: 100%
    overflow: hidden
    background-color: rgba(191, 188, 188, 0.17)
    .title-bar
      margin-top: 18px
      background-color: #ffffff
      padding-left: 15px
      padding-right: 15px
      .item
        height: 50px
        line-height: 50px
        border-bottom: 1px solid rgba(0, 0, 0, 0.38)
        font-size: 0
        &:last-child
          border-bottom: none
        i
          display: inline-block
          vertical-align: top
          line-height: 50px
          font-size: 18px
          color: #2BA0E6
          margin-left: 8px
        .title
          display: inline-block
          line-height: 50px
          vertical-align: top
          font-size: 16px
          margin-left: 15px
</style>
