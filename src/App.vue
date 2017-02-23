<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  @import "./common/stylus/icon.styl"

  #app
    font-size: 16px
</style>
