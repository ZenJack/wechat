<template>
  <div id="app">
    <v-header></v-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
import Footer from 'components/footer/footer.vue'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'v-footer': Footer
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  @import "./common/stylus/icon.styl"

  #app
    font-size: 14px
</style>
