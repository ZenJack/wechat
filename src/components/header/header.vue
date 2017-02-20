<template>
  <div class="header">
    <div class="logo">微信</div>
    <div class="search">O</div>
    <div class="add">加</div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .header
    height: 2.5em
    background-color: #272822
    color: #ffffff        
    .logo, .search, .add
      width: 3em
      height: 2.5em
      line-height: 2.5em
      text-align: center
    .search, .add
      width: 2em
    .search
      position: absolute
      top: 0
      right: 2em
    .add
      position: absolute
      top: 0
      right: 0
</style>
