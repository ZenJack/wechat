<template>
  <div class="search" ref="meScroll">
    <header class="title-bar">
      <div class="back" @click="back()">
        <i class="icon-arrow-left2"></i>
      </div>
      <div class="content">
        <i class="icon-search"></i>
        <input class="search-input" v-model="searchText" type="text" placeholder="搜索">
        <i class="icon-cross" v-show="showDel" @click="clearSearchText"></i>
      </div>
    </header>
    <div class="content-wrapper" ref="contactsScroll" v-show="searchedContacts.length">
      <div class="scroll-wrapper">
        <header class="title-search">联系人</header>
        <ul>
          <li class="item" v-for="item in searchedContacts">
            <div class="img-wraaper">
              <img :src="item.img" width="48" height="48">
            </div>
            <div class="name" v-html="item.name"></div>      
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

const ERR_NO = 0

export default {
  name: 'search',
  deactivated () {
    this.clearSearchText()
  },
  data () {
    return {
      searchedContacts: [],
      searchText: ''
    }
  },
  watch: {
    searchText: function (value, oldValue) {
      if (value) {
        this.search(value, oldValue)
      } else {
        this.clearSearchText()
      }
    }
  },
  computed: {
    showDel () {
      return this.searchText
    }
  },
  methods: {
    clearSearchText () {
      this.searchedContacts = []
      this.searchText = ''
    },
    back () {
      this.$router.go(-1)
    },
    search (value, oldValue) {
      this.$http.get('/api/contacts').then((response) => {
        response = response.body
        if (response.errno === ERR_NO) {
          this.searchedContacts = this._filtContact(response.data, value)
          this.$nextTick(() => {
            if (this.contactsScroll) {
              this.contactsScroll.refresh()
            } else {
              this.contactsScroll = new BScroll(this.$refs.contactsScroll, {
                click: true,
                probeType: 3
              })
            }
          })
        }
      })
    },
    _filtContact (contacts, target) {
      let list = []
      let highlight = '<span style="color: #0dd014">' + target + '</span>'
      contacts.forEach((item) => {
        item.contact.forEach((contact) => {
          let name = contact.name
          if (name.indexOf(target) > -1) {
            contact.name = name.replace(target, highlight)
            list.push(contact)
          }
        })
      })
      list = list.sort((a, b) => {
        return a.sort - b.sort
      })
      return list
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #fdfafa
    z-index: 1
    overflow: hidden
    display: flex
    flex-direction: column
    .title-bar
      flex: 0 0 48px
      width: 100%
      height: 48px
      background-color: #262721
      color: #fff
      display: flex
      align-items: center
      .back
        flex: 0 0 48px
        text-align: center
        border-right: 1px solid rgba(154, 144, 144, 0.95)
        i
          font-size: 20px
          color: #fff
      .content
        flex: 1
        margin-left: 15px
        margin-right: 10px
        border-bottom: 1px solid #0dd014;
        display: flex
        align-items: center
        i
          flex: 0 0 30px
          font-size: 20px
          color: #fff
          text-align: center
        .search-input
          flex: 1
          height: 28px
          border: none
          background-color: transparent
          outline: none
          color: #fff
          font-size: 16px
          &::-webkit-input-placeholder
            color: rgba(154, 144, 144, 0.95)
          &::-moz-placeholder
            color: rgba(154, 144, 144, 0.95)
        .icon-cross
          flex: 0 0 20px
          font-size: 14px
          color: rgba(154, 144, 144, 0.95)
    .content-wrapper
      flex: 1
      overflow: hidden
      .scroll-wrapper
        .title-search
          font-size: 14px
          height: 40px
          line-height: 50px
          padding-left: 15px
        .item
          height: 60px
          margin-left: 15px
          margin-right: 15px
          border-top: 1px solid rgba(0, 0, 0, 0.12)
          display: flex
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
</style>
