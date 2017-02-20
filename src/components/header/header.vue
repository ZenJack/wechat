<template>
  <div class="header">
    <div class="logo">微信</div>
    <div class="search">
      <i class="icon-bug"></i>
    </div>
    <div class="add">
      <i class="icon-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
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
</style>
