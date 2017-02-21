<template>
  <div class="header">
    <div class="logo">微信</div>
    <div class="search">
      <i class="icon-search"></i>
    </div>
    <div class="add" @click="add">
      <i class="icon-plus"></i>
    </div>
    <div class="addPanel" v-show="addPanel" @click="add">
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
              <i class="icon-mail2"></i>
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
  data () {
    return {
      addPanel: false
    }
  },
  methods: {
    add () {
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
    .logo, .search, .add
      height: 48px
      line-height: 48px
      text-align: center
      font-size: 17px
    .logo
      width: 4em
    .search
      width: 56px
      position: absolute
      top: 0
      right: 61px
    .add
      width: 56px
      position: absolute
      top: 0
      right: 5px
    .addPanel
      position: fixed
      left: 0
      top: 48px
      width: 100%
      height: 100%
      z-index: 1
      .menu-wraaper
        position: absolute
        right: 10px
        top: 0
        width: 210px
        background-color: #272822
        &.fade-enter-active
          transition: all 1s
          opacity: 1
        &.fade-enter
          opacity: 0
        &.fade-leave-active
          transition: all 1s
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
