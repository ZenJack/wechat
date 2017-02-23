<template>
  <div class="discover">
    <v-header></v-header>
    <div class="content-wrapper" ref="discoverScroll">
      <ul class="title-bar">
        <h1 class="ul-title"></h1>
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
        <h1 class="ul-title"></h1>
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
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
import Footer from 'components/footer/footer.vue'

import BScroll from 'better-scroll'

export default {
  name: 'discover',
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  activated () {
    this.init()
  },
  created () {
    this.$nextTick(() => {
      this.discoverScroll = new BScroll(this.$refs.discoverScroll, {
        click: true
      })
    })
  },
  methods: {
    init () {
      if (this.discoverScroll) {
        this.discoverScroll.refresh()
      }
    }
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .discover
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    .content-wrapper
      position: absolute
      top: 49px
      bottom: 57px
      width: 100%
      overflow: hidden
      background-color: rgba(191, 188, 188, 0.17)
      .title-bar
        background-color: #ffffff
        .ul-title
          height: 25px
          background-color: rgba(191, 188, 188, 0.17)
        .item
          margin-left: 15px
          margin-right: 15px
          height: 50px
          line-height: 50px
          border-bottom: 1px solid rgba(0, 0, 0, 0.12)
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
