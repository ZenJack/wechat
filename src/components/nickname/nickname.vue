<template>
  <div class="v-nickname" ref="nicknameScroll" @keyup.enter="saveNickname()">
    <header>
      <i class="icon icon-arrow-left2" @click="back()"></i>
      <span class="title">更改名字</span>
      <div class="btn" :class="{'on': modify}" @click="saveNickname()">保存</div>
    </header>
    <div class="content-wrapper">
      <div class="input-wrapper">
        <input type="text" v-model="nickname" class="input-nickname">
      </div>
      <div class="info-bar">
        好名字可以让你的朋友更容易记住你。
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'nickname',
    beforeRouteEnter (to, from, next) {
      if (from.path === '/account') {
        next()
      } else {
        next('/me')
      }
    },
    deactivated () {
      this.nickname = this._nickname()
      this.modify = false
    },
    data () {
      return {
        originNickname: this._nickname(),
        nickname: this._nickname(),
        modify: false
      }
    },
    watch: {
      nickname (value, oldValue) {
        if (!this.modify && value !== this.originNickname) {
          this.modify = true
        }
      }
    },
    computed: {
    },
    methods: {
      _nickname () {
        return this.$store.state.account.nickname
      },
      saveNickname () {
        if (this.modify) {
          let account = this.$store.state.account
          account.nickname = this.nickname
          this.$store.commit('setAccount', account)
          this.$router.go(-1)
        }
      },
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stlyus">
  .v-nickname
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
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
      .btn
        position: absolute
        top: 10px
        right: 8px
        background-color: #20801f
        width: 56px
        height: 28px
        line-height: 28px
        border-radius: 3px
        text-align: center
        font-size: 14px
        color: #ddd
        &.on
          background-color: #28ca26
          color: #fff
    .content-wrapper
      margin-left: 15px   
      margin-right: 15px
      .input-wrapper
        height: 50px
        border-bottom: 1px solid #0dd014
        display: flex
        align-items: flex-end
        .input-nickname
          border: none
          outline: none;
          flex: 1;
          margin-left: 10px;
          margin-right: 10px;
          margin-bottom: 2px;
          height: 24px;
      .info-bar
        font-size: 13px
        margin-top: 12px
        padding-left: 5px
</style>
