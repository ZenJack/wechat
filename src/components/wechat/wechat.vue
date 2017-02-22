
<template>
  <div class="wechat" ref="itemScroll">
    <div class="item-wrapper">
      <ul>
        <li class="item" v-for="msg in msgs">
          <div class="img-wrapper">
            <img :src="msg.img" width="48" height="48">
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
import { Indicator } from 'mint-ui'

const ERR_NO = 0

export default {
  name: 'wechat',
  data () {
    return {
      msgs: [],
      refresh: false
    }
  },
  created () {
    this.$http.get('/api/wechat').then((response) => {
      response = response.body
      if (response.errno === ERR_NO) {
        this.msgs = response.data
        let _this = this
        this.$nextTick(() => {
          this.itemScroll = new BScroll(this.$refs.itemScroll, {
            click: true,
            probeType: 3
          })
          this.itemScroll.on('scroll', function (pos) {
            if (pos.y >= 60 && !_this.refresh) {
              _this.refresh = true
              Indicator.open()
              Indicator.open({
                text: '刷新中...',
                spinnerType: 'triple-bounce'
              })
              setTimeout(() => {
                Indicator.close()
                _this.addMsgs()
              }, 1500)
            }
          })
        })
      }
    })
  },
  filters: {
    formatDate (time) {
      let date = new Date()
      date.setTime(time)
      return formatDate(date, 'hh:mm')
    }
  },
  methods: {
    addMsgs () {
      this.$http.get('/api/news').then((response) => {
        response = response.body
        if (response.errno === ERR_NO) {
          let news = response.data
          let index = -1
          while (true) {
            index = Math.floor(Math.random() * news.length)
            if (index >= 0 && index < news.length) {
              break
            }
          }
          let msg = news[index]
          msg.time = new Date().getTime()
          this.msgs.unshift(msg)
          this.refresh = false
          this.$nextTick(() => {
            if (this.itemScroll) {
              this.itemScroll.refresh()
            }
          })
        }
      })
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
        height: 70px
        border-bottom: 1px solid rgba(0, 0, 0, 0.12)
        &:last-child
          border-bottom: none
        .img-wrapper
          flex: 0 0 70px
          height: 70px
          line-height: 70px
          text-align: center
          img
            margin-top: 11px
        .content-wrapper
          flex: 1
          padding-top: 14px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          .name
            margin-top: 8px
            height: 22px
            line-height: 22px
            font-size: 16px
          .msg
            margin-bottom: 8px
            height: 22px
            line-height: 22px
            font-size: 14px
            color: #767575
        .time
          flex: 0 0 50px
          width: 50px
          font-size: 12px
          text-align: center
          padding-top: 7px
</style>
