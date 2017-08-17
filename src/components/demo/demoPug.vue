<template lang="pug">
  -var prefix = 'zen-'
  div.demoPug
    p.title
      button.back(@click="back()" class=prefix+'back') &lt;返回
      span 你好 {{name}}!
    div.content
      p 优点：
      ol
        li 代码简洁
        li 风格清晰
        li 层次分明
        li 与 vue 完美结合
      hr
      a.pugSnytax(target="_blank" href="http://naltatis.github.io/jade-syntax-docs/#text").
        点击，进入 pug 语法学习
    footer(:class="{'active': actived}" @click="active()").
      点击我，更换皮肤
</template>
<script>
export default {
  name: 'demoPug',
  data () {
    return {
      name: 'Pug',
      info: `
        首先，在这里你可以畅所欲言！
        其次，这个页面是由 pug 模板引擎所渲染。
      `,
      actived: true
    }
  },
  methods: {
    active () {
      this.actived = !this.actived
    },
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .demoPug
    width: 100%
    .title
      font: bold 20px/20px 'microsoft yahei'
      padding: 15px
      padding-left: 0px
      background-color: #2db395
      color: #fff
      transition: all 0.5s
      &:hover
        background-color: #1b6554
      .back
        border: none
        background-color: transparent
        font: bold 20px 'microsoft yahei'
        color: #ffffff
        outline: none
        cursor: pointer
        margin-right: 10px
    .content
      font: normal 16px/24px 'microsoft yahei'
      color: #1c6b3d
      padding: 15px
      p
        font-weight: bold
      li
        list-style-type: cjk-heavenly-stem
        margin-left: 40px
      .pugSnytax
        display: block
        color: #d80101
        text-decoration: underline
        transition: all 0.5s
        &:hover
          color: #ff2121
    footer
      position: absolute
      left: 0
      right: 0
      bottom: 0
      background-color: #089c28
      color: #fff
      font: normal 16px/20px 'microsoft yahei'
      padding: 15px
      cursor: pointer
      &.active
        background-color: #51366d
</style>
