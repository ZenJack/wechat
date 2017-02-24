<template>
  <div class="account">
    <header>
      <i class="icon icon-arrow-left2" @click="back()"></i>
      <span class="title">个人信息</span>
    </header>
    <div class="content-wrapper" ref="accountScroll">
      <div class="ul-wrapper">
        <ul>
          <h1 class="ul-title"></h1>
          <li class="item">
            <h1 class="title">头像</h1>
            <div class="content">
              <img :src="account.img" width="60" height="60">
            </div>
          </li>
          <router-link to="/nickname">
            <li class="item">
              <h1 class="title">昵称</h1>
              <div class="content">{{ account.nickname }}</div>
            </li>
          </router-link>
          <li class="item">
            <h1 class="title">微信号</h1>
            <div class="content">{{ account.account }}</div>
          </li>
          <li class="item">
            <h1 class="title">我的地址</h1>
            <div class="content"></div>
          </li>
        </ul>

        <ul>
          <h1 class="ul-title"></h1>
          <li class="item" @click="toggleGender()">
            <h1 class="title">性别</h1>
            <div class="content">{{ account.gender }}</div>
          </li>
          <li class="item">
            <h1 class="title">地区</h1>
            <div class="content">{{ account.area }}</div>
          </li>
          <li class="item">
            <h1 class="title">个性签名</h1>
            <div class="content">{{ account.signature }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="gender-wrapper" v-show="genderShow">
      <mt-radio
        title="性别" 
        align="right" 
        v-model="gender" 
        :options="genderOptions">
      </mt-radio>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'account',
  beforeRouteEnter (to, from, next) {
    if (from.path === '/me' || from.path === '/nickname') {
      next()
    } else {
      next('/me')
    }
  },
  activated () {
    if (this.accountScroll) {
      this.accountScroll.refresh()
    }
  },
  data () {
    return {
      account: {},
      gender: '',
      genderShow: false,
      genderOptions: [
        {
          label: '男',
          value: '男'
        },
        {
          label: '女',
          value: '女'
        }
      ]
    }
  },
  watch: {
    gender (value, oldValue) {
      this.account.gender = value
      this.$store.commit('setAccount', this.account)
      this.toggleGender()
    }
  },
  created () {
    this.account = this.$store.state.account
    this.gender = this.account.gender
    this.$nextTick(() => {
      this.accountScroll = new BScroll(this.$refs.accountScroll, {
        click: true,
        probeType: 3
      })
    })
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    toggleGender () {
      this.genderShow = !this.genderShow
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .account
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #E2E2E2
    z-index: 1
    header
      width: 100%
      height: 48px
      background-color: #262721
      color: #fff
      .icon
        display: inline-block
        width: 48px
        height: 48px
        line-height: 48px
        text-align: center
        font-size: 18px
        color: #fff
      .title
        display: inline-block
        border-left: 1px solid rgba(154, 144, 144, 0.95)
        padding-left: 10px
    .content-wrapper
      position: absolute
      top: 48px
      bottom: 0
      width: 100%
      overflow: hidden
      background-color: #fff
      .ul-wrapper
        .ul-title
          height: 25px
          background-color: rgba(191, 188, 188, 0.17)
        .item
          margin-left: 15px
          margin-right: 15px
          min-height: 50px
          border-bottom: 1px solid rgba(0, 0, 0, 0.12)
          display: flex
          align-items: center
          color: #000
          &:last-child
            border-bottom: none
          .title
            flex: 1
          .content
            flex: 1
            text-align: right
            color: #767575
            img
              margin-top: 7px
              margin-bottom: 7px
    .gender-wrapper
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(37, 31, 31, 0.45)
      display: flex
      align-items: center
      justify-content: center
      .mint-radiolist
        width: 70%
        background-color: #fff
        padding: 20px 10px
        .mint-radiolist-title
          font-size: 16px
          color: #000
          padding-left: 10px
        .mint-cell
          .mint-radio-label, mint-radio
            font-size: 14px
</style>
