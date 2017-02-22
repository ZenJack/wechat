<template>
  <div class="me" ref="meScroll">
    <div class="content-wrapper">
      <ul class="title-bar">
        <h1 class="ul-title"></h1>
        <router-link to="/account">
          <li class="person">
            <div class="img-wrapper">
              <img src="/static/images/349878_7044878_1.jpg" width="70" height="70">
            </div>
            <div class="content-wrapper">
              <div class="nickname">{{ account.nickname }}</div>
              <div class="wechatAccount">微信号：{{ account.account }}</div>
            </div>
          </li> 
        </router-link>
      </ul>
      <ul class="title-bar">
        <h1 class="ul-title"></h1>
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
        <h1 class="ul-title"></h1>
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
        <h1 class="ul-title"></h1>
        <li class="item">
          <i class="icon-flickr4 face"></i>
          <span class="title">表情</span>
        </li>
      </ul>
      <ul class="title-bar">
        <h1 class="ul-title"></h1>
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

const ERR_NO = 0

export default {
  name: 'me',
  components: {
  },
  data () {
    return {
      account: {},
      showAccount: false
    }
  },
  created () {
    this.$http.get('/api/account').then((response) => {
      response = response.body
      if (response.errno === ERR_NO) {
        this.account = response.data
        this.$nextTick(() => {
          this.meScroll = new BScroll(this.$refs.meScroll, {
            click: true
          })
        })
      }
    })
  },
  methods: {
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
    .content-wrapper
      .title-bar
        background-color: #ffffff
        .ul-title
          height: 25px
          background-color: rgba(191, 188, 188, 0.17)
        .person
          margin-left: 15px
          margin-right: 15px
          display: flex
          .img-wrapper
            flex: 0 0 75px
            width: 75px
            text-align: center
            margin-top: 15px
            margin-bottom: 15px
          .content-wrapper
            flex: 1
            margin-left: 20px
            .nickname
              margin-top: 30px
            .wechatAccount
              margin-top: 8px
              font-size: 14px
              color: #767575
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
            &.face
              color: #F4C020
          .title
            display: inline-block
            line-height: 50px
            vertical-align: top
            font-size: 16px
            margin-left: 15px
</style>
