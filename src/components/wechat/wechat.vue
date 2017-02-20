<template>
  <div class="wechat">
    <div class="item" v-for="msg in msgs">
      <div class="img-wrapper">
        <img :src="msg.img" width="36" height="36">
      </div>
      <div class="content-wrapper">
        <div class="name">{{ msg.name }}</div>
        <div class="msg">{{ msg.msg }}</div>
      </div>
      <div class="time">{{ msg.time | formatDate }}</div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../common/js/date.js'

const ERR_NO = 0

export default {
  name: 'wechat',
  data () {
    return {
      msgs: []
    }
  },
  created () {
    this.$http.get('/api/wechat').then((response) => {
      response = response.body
      if (response.errno === ERR_NO) {
        this.msgs = response.data
      }
    })
  },
  filters: {
    formatDate (time) {
      let date = new Date()
      return formatDate(date, 'hh:mm')
    }
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .wechat
    position: absolute
    top: 2.5em
    bottom: 3em
    width: 100%
    overflow: auto
    .item
      position: relative
      display: flex
      border-bottom: 1px solid #463C3C
      .img-wrapper
        flex: 0 0 46px
        height: 46px
        line-height: 46px
        text-align: center
        img
          margin-top: 5px
      .content-wrapper
        flex: 1
        .name
          margin-top: 5px
          height: 18px
          line-height: 18px
          font-size: 12px
          font-weight: bold
        .msg
          margin-bottom: 5px
          height: 18px
          line-height: 18px
          font-size: 10px
      .time
        position: absolute
        top: 5px
        right: 5px
        font-size: 10px
</style>
