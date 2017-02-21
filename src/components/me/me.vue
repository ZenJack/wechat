<template>
  <div class="me" ref="meScroll">
    <div class="wraaper">
      <ul class="title-bar">
        <li class="person">
          <div class="img-wraaper">
            <img src="/static/images/349878_7044878_1.jpg" width="70" height="70">
          </div>
          <div class="content-wraaper">
            <div class="nickname">宋江</div>
            <div class="account">微信号：jishiyu</div>
          </div>
        </li> 
      </ul>

      <ul class="title-bar">
        <li class="item">
          <i class="icon-image"></i>
          <span class="title">相册</span>
        </li>
        <li class="item">
          <i class="icon-briefcase"></i>
          <span class="title">收藏</span>
        </li>
      </ul>

      <ul class="title-bar">
        <li class="item">
          <i class="icon-coin-yen"></i>
          <span class="title">钱包</span>
        </li>
        <li class="item">
          <i class="icon-compass2"></i>
          <span class="title">卡包</span>
        </li>
      </ul>

      <ul class="title-bar">
        <li class="item">
          <i class="icon-flickr4 face"></i>
          <span class="title">表情</span>
        </li>
      </ul>

      <ul class="title-bar">
        <li class="item">
          <i class="icon-cog"></i>
          <span class="title">设置</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'me',
  created () {
    this.$nextTick(() => {
      this.meScroll = new BScroll(this.$refs.meScroll, {
        click: true
      })
    })
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .me
    position: absolute
    top: 48px
    bottom: 56px
    width: 100%
    overflow: hidden
    background-color: rgba(191, 188, 188, 0.17)
    font-size: 16px
    .title-bar
      margin-top: 18px
      background-color: #ffffff
      padding-left: 15px
      padding-right: 15px
      .person
        display: flex
        .img-wraaper
          flex: 0 0 75px
          width: 75px
          text-align: center
          margin-top: 15px
          margin-bottom: 15px
        .content-wraaper
          flex: 1
          margin-left: 20px
          .nickname
            margin-top: 30px
          .account
            margin-top: 8px
            font-size: 14px
            color: #767575
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
          &.face
            color: #F4C020
        .title
          display: inline-block
          line-height: 50px
          vertical-align: top
          font-size: 16px
          margin-left: 15px
</style>
