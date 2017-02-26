<template>
  <div class="contact">
    <v-header></v-header>
    <div class="contact-wrapper" ref="contactScroll">
      <ul>
        <li class="contact-list contact-list-hook" v-for="contact in contacts">
          <h1 class="alpha-name">{{ contact.name | uppercase }}</h1>
          <ul>
            <li class="item" v-for="item in contact.contact" @mousedown="setBackname" @mouseup="unsetBackname" @touchstart="setBackname" @touchend="unsetBackname">
              <div class="img-wraaper">
                <img :src="item.img" width="48" height="48">
              </div>
              <div class="name">{{ item.name }}</div>
            </li>
          </ul>
        </li>
        <li class="contact-count" v-show="contactCountShow">
          {{contactCount}}位联系人
        </li>
      </ul>
      <div class="alpha-table" :class="{'hover': selectedAlphatab}">
        <ul class="alpha-list">
          <li class="alpha" v-for="(alpha, index) in alphatab" @mousedown="selectAlpha(alpha,index)" @mouseup="unselectAlpha" @touchstart="selectAlpha(alpha,index)" @touchend="unselectAlpha">{{ alpha }}</li>
        </ul>
      </div>
      <div class="alphaPanel" v-show="alpha">
        <span class="alpha">{{ alpha }}</span>
      </div>
      <div class="backNamePanel" v-show="backNameShow" @mousedown.self="closeBackname" @touchstart.self="closeBackname">
        <span class="backName">设置备注</span>
      </div>
    </div>
   <v-footer></v-footer>
  </div>
</template>

<script>
import Header from 'components/header/header.vue'
import Footer from 'components/footer/footer.vue'

import BScroll from 'better-scroll'

const ERR_NO = 0

export default {
  name: 'contact',
  activated () {
    this.init()
  },
  data () {
    return {
      contacts: [],
      alphatab: ['↑', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      selectedAlphatab: false,
      alpha: '',
      contactList: [],
      contactCountShow: false,
      backNameShow: false,
      touchEvent: null
    }
  },
  components: {
    'v-header': Header,
    'v-footer': Footer
  },
  created () {
    this.$http.get('/api/contacts').then(response => {
      response = response.body
      if (response.errno === ERR_NO) {
        this.contacts = response.data.sort(function (a, b) {
          return a.name.localeCompare(b.name)
        })
        this.contactCountShow = true
        this.$nextTick(() => {
          this.contactScroll = new BScroll(this.$refs.contactScroll, {
            click: true,
            probeType: 3
          })
        })
      }
    })
  },
  computed: {
    contactCount () {
      let lenth = 0
      this.contacts.forEach((contactList) => {
        contactList.contact.forEach((contact) => {
          lenth++
        })
      })
      return lenth
    }
  },
  methods: {
    init () {
      if (this.contactScroll) {
        this.contactScroll.refresh()
      }
    },
    selectAlpha (alpha, index) {
      this.selectedAlphatab = true
      this.alpha = alpha
      this.contactList = this.$refs.contactScroll.getElementsByClassName('contact-list-hook')
      let el = null
      for (let i = 0; i < this.contactList.length; i++) {
        let node = this.contactList[i]
        let _alpha = node.childNodes[0].innerHTML
        if (alpha === _alpha || alpha === '↑') {
          el = node
          break
        }
      }
      if (el) {
        this.contactScroll.scrollToElement(el, 300)
      }
    },
    unselectAlpha (event) {
      this.alpha = ''
      this.selectedAlphatab = false
    },
    setBackname () {
      this.touchEvent = setTimeout(() => {
        this.backNameShow = true
      }, 500)
    },
    unsetBackname (event) {
      clearTimeout(this.touchEvent)
    },
    closeBackname (event) {
      this.backNameShow = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contact
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    .contact-wrapper
      position: absolute
      top: 49px
      bottom: 57px
      width: 100%
      overflow: hidden
      .contact-list
        .alpha-name
          width: 100%
          height: 25px
          line-height: 25px
          padding-left: 15px
          font-size: 16px
          background-color: rgba(191, 188, 188, 0.17)
        .item
          display: flex
          overflow: hidden
          height: 60px
          margin-left: 15px
          margin-right: 15px
          border-bottom: 1px solid rgba(0, 0, 0, 0.12)
          &:last-child
            border-bottom: none
          .img-wraaper
            flex: 0 0 48px
            line-height: 48px
            text-align: center
            img
              margin-top: 5px
          .name
            flex: 1
            margin-left: 15px
            line-height: 60px
      .contact-count
        width: 100%
        height: 70px
        line-height: 70px
        text-align: center
        background-color: #eee
        font-size: 17px
      .alpha-table
        position: absolute
        top: 0
        right: 0
        width: 25px
        height: 100%
        text-align: center
        padding-top: 3px
        z-index: 1
        &.hover
          color: #fff
          background-color: rgba(51, 51, 51, 0.75)
        .alpha-list
          display: flex
          flex-direction: column
          height: 100%
          .alpha
            flex: 1
            font-size: 14px
      .alphaPanel, .backNamePanel
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        text-align: center 
        display: flex
        align-items: center
        justify-content: center
        .alpha
          font-size: 46px
          width: 80px
          height: 80px
          line-height: 80px
          background-color: rgba(51, 51, 51, 0.75)
          color: #eaeaea
          text-align: center
          border-radius: 5px
      .backNamePanel
        background-color: rgba(37, 31, 31, 0.45)
        .backName
          font-size: 16px
          color: #000
          width: 70%;
          height: 2.5em
          background: #fff
          line-height: 2.5em
          text-align: left
          padding-left: 20px
          border-radius: 3px
</style>
