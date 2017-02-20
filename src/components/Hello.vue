<template>
  <div class="hello">
    <quill-editor ref="myTextEditor"
                  v-model="content"
                  :config="editorOption">
    </quill-editor>
    <div class="content">
      <h1 class="title">源码显示</h1>
      <div class="wraaper">
        {{ content }}
      </div>
      <h1 class="title">网页渲染</h1>
      <div class="wraaper" v-html="trimContent"></div>
    </div>  
    <div class="button">
      <mt-button @click.native="handleClick">按钮</mt-button>
      <mt-button @click.native="load">加载</mt-button>
    </div>
  </div>
</template>

<script>
import {Toast, Indicator} from 'mint-ui'
import {quillEditor} from 'vue-quill-editor'
export default {
  name: 'hello',
  data () {
    return {
      content: '',
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],        // toggled buttons
            // ['blockquote', 'code-block'],

            // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{'list': 'ordered'}, { 'list': 'bullet' }],
            // [{'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            // [{'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            // [{ 'direction': 'rtl' }],                         // text direction

            // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            // [{ 'font': [] }],
            // [{ 'align': [] }],

            ['clean']                                         // remove formatting button
          ]
        },
        placeholder: '编辑你的评价……',
        theme: 'snow'   // bubble 自动隐藏工具栏
      }
    }
  },
  computed: {
    trimContent () {
      console.log(this.content)
      return this.content.replace('<p><br></p>', '')
    }
  },
  methods: {
    handleClick () {
      Toast({
        message: 'Hello World!',
        position: 'bottom'
      })
    },
    load () {
      Indicator.open({
        text: '加载中……',
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Indicator.close()
      }, 1000)
    }
  },
  components: {
    'quill-editor': quillEditor
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  h1,h2,h3,h4,h5,h6,p,ol,ul
    margin: 0
    paddgin: 0

  .hello
    .content
      .title
        font-size: 20px
        font-weight: 700
        margin-bottom: 10px
        margin-left: 10px
      .wraaper
        min-height: 2rem
        border: 1px solid
        margin: 10px
        padding: 20px
        font-size: 13px
    .ql-toolbar
      margin: 10px 10px 0 10px
    .quill-editor
      margin: 0 10px 10px 10px
    .button
      text-align: center
</style>
