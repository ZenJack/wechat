<template>
  <div class="wechat" ref="itemScroll">
    <div class="item-wrapper">
      <ul>
        <li class="item" v-for="msg in msgs">
          <div class="img-wrapper">
            <img :src="msg.img" width="46" height="46">
          </div>
          <div class="content-wrapper">
            <span class="name">{{ msg.name }}</span><br>
            <span class="msg">{{ msg.msg }}</span>
          </div>
          <div class="time">{{ msg.time | formatDate }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../common/js/date.js'
import BScroll from 'better-scroll'

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
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.itemScroll, {
            click: true
          })
        })
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
    top: 48px
    bottom: 56px
    width: 100%
    overflow: hidden
    .item-wrapper
      .item
        position: relative
        display: flex
        height: 60px
        border-bottom: 1px solid #BFB5B5
        &:last-child
          border-bottom: none
        .img-wrapper
          flex: 0 0 60px
          height: 60px
          line-height: 60px
          text-align: center
          img
            margin-top: 5px
        .content-wrapper
          flex: 1
          padding-top: 7px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          .name, .msg
            // display: inline-block
          .name
            margin-top: 8px
            height: 22px
            line-height: 22px
            font-size: 15px
            font-weight: 700
          .msg
            margin-bottom: 8px
            height: 22px
            line-height: 22px
            font-size: 13px
        .time
          flex: 0 0 50px
          width: 50px
          // position: absolute
          // top: 7px
          // right: 8px
          font-size: 12px
          text-align: center
          padding-top: 7px
</style>
