<template>
  <div class="footer">
    <div class="tab-item">
      <router-link to="/wechat">
        <i class="icon-bubble2"></i>
        <span class="tab-name">微信</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/contact">
        <i class="icon-users"></i>
        <span class="tab-name">通讯录</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/discover">
        <i class="icon-power"></i>
        <span class="tab-name">发现</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/me">
        <i class="icon-user"></i>
        <span class="tab-name">我</span>
      </router-link>
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
    position: fixed
    left: 0
    bottom: 0
    height: 56px
    width: 100%
    display: flex
    border-top: 1px solid #938989
    .tab-item
      flex: 1
      height: 56px
      line-height: 56px
      text-align: center
      font-size: 12px
      a
        display: block
      .router-link-active
        color: #10A727
      i, .tab-name
        display: block
      i
        font-size: 22px
        width: 100%
        line-height: 38px
      .tab-name
        width: 100%
        line-height: 6px
</style>
