<template>
  <div class="footer">
    <div class="tab-item">
      <router-link to="/wechat">微信</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/contact">通讯录</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/discover">发现</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/me">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .footer
    position: absolute
    left: 0
    bottom: 1px
    height: 3em
    width: 100%
    display: flex
    .tab-item
      flex: 1
      border-top: 1px solid #4D4B44
      height: 3em
      line-height: 3em
      text-align: center
      a
        display: block
      .router-link-active
        color: #77E71E
</style>
