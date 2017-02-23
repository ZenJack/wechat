<template>
  <div class="header">
    <div class="header-bar">
      <div class="logo">微信</div>
      <div class="other"></div>
      <div class="btn-search">
        <router-link to="/search">
          <i class="icon-search"></i>
        </router-link>
      </div>
      <div class="btn-add" @click="toggleAdd">
        <i class="icon-plus"></i>
      </div>
    </div>
    <div class="addPanel" v-show="addPanel" @click.stop="toggleAdd">
      <transition name="fade">
        <div class="menu-wraaper" v-show="addPanel">
          <ul>
            <li class="item">
              <i class="icon-bubble"></i>
              <span class="name">发起群聊</span>
            </li>
            <li class="item">
              <i class="icon-user-plus"></i>
              <span class="name">添加朋友</span>
            </li>
            <li class="item">
              <i class="icon-spinner3"></i>
              <span class="name">扫一扫</span>
            </li>
            <li class="item">
              <i class="icon-coin-yen"></i>
              <span class="name">收付款</span>
            </li>
            <li class="item">
              <i class="icon-envelop"></i>
              <span class="name">帮助与反馈</span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  beforeRouteLeave (to, from, next) {
    console.log('leave')
    next()
  },
  data () {
    return {
      addPanel: false
    }
  },
  methods: {
    toggleAdd () {
      let flag = !this.addPanel
      this.addPanel = flag
    }
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .header
    height: 48px
    background-color: #272822
    color: #ffffff
    .header-bar
      height: 100%
      display: flex
      text-align: center
      align-items: center
      .btn-search, .btn-add
        width: 40px
        height: 100%
        line-height: 48px
      .logo
        flex: 0 0 4em
        width: 4em
      .other
        flex: 1
      .btn-search
        flex: 0 0 40px
        font-size: 18px
        padding-top: 3px
        i
          color: #ffffff
          font-size: 20px
      .btn-add
        flex: 0 0 40px
        margin-right: 10px
        z-index: 10
    .addPanel
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 1
      .menu-wraaper
        position: absolute
        right: 10px
        top: 47px
        width: 210px
        background-color: #272822
        &.fade-enter-active
          transition: all 0.3s
          opacity: 1
        &.fade-enter
          opacity: 0
        &.fade-leave-active
          transition: all 0.2s
          opacity: 0
        &.fade-leave
          opacity: 1
        .item
          border-bottom: 1px solid #585757
          height: 46px
          line-height: 46px
          padding-left: 15px
          font-size: 0
          &:last-child
            border-bottom: none
          i
            display: inline-block
            font-size: 22px
            vertical-align: middle
          .name
            display: inline-block
            font-size: 16px
            vertical-align: top
            margin-left: 10px
</style>
