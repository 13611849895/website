<template>
  <div>
    <v-header></v-header>
    <div class=" main">
      <div class="title"> 发布主题</div>
        <div class="add-title">
          <span>主题名称</span>
          <span><input type="text" name="" value="" v-model="title"></span>
        </div>
        <div class="add-content">
          <span>主题内容</span>
          <span><textarea name="name" rows="8" cols="80" v-model="content"></textarea></span>
        </div>
        <div class="button">
          <a href="javascript:void(0);" @click="submit" class="on-btn">发布</a>
        </div>

        <!-- ---------------------------------------------------- -->
        <!-- ---------------------------------------------------------- -->
        <!-- <button class="btn" @click="subContent">发布</button> -->
      <!-- </div> -->
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
      title: '',
      content: '',
      tab: ''
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
    // subContent ({editor, html, text}) {
    //   this.$axios.post('https://cnodejs.org/api/v1/topics', {
    //     tab: 'dev',
    //     contnet: this.content,
    //     accessToken: localStorage.getItem()
    //   })
    //   console.log(this.content)
    //   this.content = ''
    // }
    submit () {
      this.$axios.post('https://cnodejs.org/api/v1/topics', {
        title: this.title,
        tab: 'dev',
        content: this.content,
        accessToken: '3c64c40f-9c84-40a0-8481-407237257e9c'
      }).then((res) => {
        console.log('发布成功')
        this.$router.push('/')
      }).catch((err) => {
        console.log(err)
        // this.$router.push('/')
      })
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
  /* .ql-toolbar {
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
  } */
  .add-title, .add-content, .button{
    text-align: center;
    padding: 20px;
    border-radius: 3px
  }
  .add-title input{
    width: 500px;
    border: 1px solid #333;
    height: 35px;
    text-align: center;
  }
  .add-content textarea{
    width: 500px;
    border: 1px solid #333;
    border-radius: 3px

  }
  .button a{
    display: inline-block;
    background: #8729E7;
    width: 300px;
    color: white;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }
</style>
