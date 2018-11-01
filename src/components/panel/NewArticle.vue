<template>
  <div>
    <v-header></v-header>
    <div class=" main">
      <div class="ed-inner">
        <div class="title"> 发布主题</div>
          <div class="type">
            选择主题类型:
            <select v-model="tab" class="chose">
              <option>请选择板块</option>
              <option>分享</option>
              <option>问答</option>
              <option>招聘</option>
              <option>客户端测试</option>
            </select>
          </div>
          <div class="add-title">
            <span>主题名称:</span>
            <span><input type="text" name="" value="" v-model="title"></span>
          </div>
          <div class="add-content">
            <span>主题内容:</span>
            <span><textarea name="name" rows="8" cols="80" v-model="content"></textarea></span>
          </div>
          <div class="button">
            <a href="javascript:void(0);" @click="submit" class="on-btn">发布</a>
          </div>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
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
      tab: '请选择板块',
      accesstoken: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    submit () {
      if (this.tab === '分享') {
        this.tab = 'share'
      } else if (this.tab === '问答') {
        this.tab = 'ask'
      } else if (this.tab === '招聘') {
        this.tab = 'job'
      } else {
        this.tab = 'dev'
      }
      console.log(localStorage.getItem('user.token'))
      this.$axios.post('https://cnodejs.org/api/v1/topics', {
        title: this.title,
        tab: this.tab,
        content: this.content,
        accesstoken: this.accesstoken.token
      }).then((res) => {
        console.log('发布成功')
        this.$router.push('/')
      }).catch(() => {
        alert('Post请求失败')
        this.$router.push('/')
        console.log(this.accesstoken.token)
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
    padding: 20px;
  }
  .type {
    margin: 5px;
  }
  .chose {
    margin-left: 10px;
    width: 200px;
    height: 30px;
    border-radius: 5px;
  }
  .ed-inner {
    padding: 5px;
    width: 90%;
    background-color:antiquewhite;
    color:black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }
  .add-title, .add-content, .button{
    text-align: center;
    padding: 20px;
    border-radius: 5px
  }
  .add-title input{
    width: 500px;
    border: 1px solid #333;
    height: 35px;
    text-align: center;
    border-radius: 5px

  }
  .add-content textarea{
    width: 500px;
    border: 1px solid #333;
    border-radius: 5px

  }
  .button a{
    display: inline-block;
    background-color: slateblue;
    width: 300px;
    color: white;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }
</style>
