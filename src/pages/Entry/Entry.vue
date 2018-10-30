<template>
  <div class="entry">
    <v-header></v-header>
    <div class="main">
      <div class="main-rt"></div>
      <div class="main-lf">
        <div class="panel">
          <div class="m-header">
            <router-link to="/">主页</router-link> / 登录
          </div>
          <div class="m-inner">
            <div class="tips" >请输入AccessToken</div>
            <input type="text" class="inp" placeholder="请输入AccessToken" v-model="accesstoken">
            <input type="submit" @click="login" value="登录" class="btn">
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
export default {
  name: 'Entry',
  data () {
    return {
      accesstoken: ''
    }
  },
  components: {
    VHeader,
    VFooter
  },
  methods: {
    login () {
      this.$axios.post('https://cnodejs.org/api/v1/accesstoken', {
        accesstoken: this.accesstoken
      }).then(res => {
        // this.$store.dispatch('login', res)
        localStorage.setItem('res', JSON.stringify(res.data))
        this.$router.push('/')
        // this.close()
      }).catch((err) => {
        console.log(err)
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
    min-height: 700px;;
    font-size: 14px;
  }
  .panel {
    text-align: left;
    margin-bottom: 13px;
  }
  .main-lf {
    margin-right: 305px;
  }
  .main-rt {
    width: 290px;
  }
  .m-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid  #eee
  }
  .m-inner {
    background-color: #fff;
    padding: 50px;
  }
  .tips {
    font-size: 20px;
    color: cornflowerblue;
    text-align: center;
    margin-bottom: 30px;
  }
  .inp {
    display: block;
    margin: 0 auto;
    width: 370px;
    height: 30px;
    border: 2px solid darkgrey
  }
  .btn {
    display: block;
    margin: 50px auto;
    width: 200px;
    height: 40px;
    background-color: cornflowerblue;
    color: #fff;
    border-radius: 3px;
    border: none;
  }
  .btn:hover {
    cursor: pointer;
  }
</style>
