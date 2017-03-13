<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      const toPath = to.path
      this.transitionName = toPath.slice(1)
    }
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  @import "./common/stylus/icon.styl"

  #app
    font-size: 16px

  @media screen and (min-width: 500px)
    #app
      position: relative
      margin: 0 auto
      width: 414px
      height: 100vh
      border: 1px solid #bbb1b1
  
  .search-enter-active
    transition: all 0.2s linear
    transform: scale(1, 1)
    opacity: 1
  .search-enter
    transform: scale(0.5, 0.5)
    opacity: 0.8
  // .me-enter-active
  //   transition: all 0.2s linear
  //   transform: scale(1, 1)
  // .me-enter
  //   transform: scale(0, 1)
  .discover-enter-active
    transition: all 0.2s linear
    transform: scale(1, 1)
  .discover-enter
    transform: scale(0, 1)
  // .contact-enter-active
  //   transition: all 0.5s linear
  //   transform: translate(0, 0)
  // .contact-enter
  //   transform: translate(100%, -100%)
</style>
