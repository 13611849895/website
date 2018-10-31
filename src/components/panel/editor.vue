<template>
  <div>
    <v-header></v-header>
    <div class=" main">
      <quill-editor  v-model="content"
            
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
      </quill-editor>
      <div class="on-btn">
        <button class="btn" @click="subContent">回复</button>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
import VHeader from '../header/header'
import VFooter from '../footer/footer'
export default {
  components: {
    VHeader,
    VFooter
  },
  data () {
    return {
      content: '',
      editorOption: {},
      tab: '',
      content
    }
  },
  methods: {
    onEditorBlur (editor) { // 失去焦点事件
    },
    onEditorFocus (editor) { // 获得焦点事件
    },
    onEditorChange ({editor, html, text}) { // 编辑器文本发生变化
      // this.content可以实时获取到当前编辑器内的文本内容
      // console.log(this.content)
    },
    subContent ({editor, html, text}) { // 获取content中的数据，post请求提交
      this.$axios.post('https://cnodejs.org/api/v1/topics', {
        tab: 'dev',
        contnet: this.content,
        accessToken: localStorage.getItem()
      })
      console.log(this.content)
      this.content = ''
    }

  }
}
</script>

<style>
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 700px;
  }
  .ql-toolbar {
    max-height: 200px;
    background-color: #fff,
    border
  }
  .ql-snow {
    background-color: #fff,
  }
  .ql-editor {
    min-height: 450px;
    background-color: #fff;
    border: none
  }
  .on-btn {
    width: 100%;
    height: 50px;
    background-color: #fff
  }
  .btn {
    background-color: #08c;
    color: #fff;
    padding: 7px 25px;
    border: none;
    border-radius: 3px;
    margin: 5px;
    z-index: 50;
  }
</style>
