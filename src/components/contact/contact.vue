<template>
  <div class="contact" ref="contactScroll">
    <div class="contact-wrapper">
      <ul>
        <li class="contact-list contact-list-hook" v-for="contact in contacts">
          <h1 class="alpha-name">{{ contact.name | uppercase }}</h1>
          <ul>
            <li class="item" v-for="item in contact.contact">
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
    </div>
    <div class="alpha-table" :class="{'hover': selectedAlphatab}">
      <ul class="alpha-list">
        <li class="alpha" v-for="(alpha, index) in alphatab" @click="selectAlpha(alpha,index)">{{ alpha }}</li>
      </ul>
    </div>
    <div class="alphaPanel" v-show="alpha">
      <span class="alpha">{{ alpha }}</span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const ERR_NO = 0

export default {
  name: 'contact',
  data () {
    return {
      contacts: [],
      alphatab: ['↑', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
      selectedAlphatab: false,
      alpha: '',
      contactList: [],
      contactCountShow: false
    }
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
      setTimeout(() => {
        this.alpha = ''
        this.selectedAlphatab = false
      }, 500)
    }
  }
}
</script>

<style lang="stylus" rel="styleesheet/stylus">
  .contact
    position: absolute
    top: 48px
    bottom: 56px
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
    .alphaPanel
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
</style>
