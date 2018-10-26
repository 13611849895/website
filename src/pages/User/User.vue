<template>
  <div class="user">
    <v-header></v-header>
    <div class="main">
      <div class="main-rt">
        <mlink></mlink>
        <firend></firend>
        <erma></erma>
      </div>
      <div class="main-lf">
        <div class="panel">
          <div class="p-header">
            <router-link to="/">主页/</router-link>
          </div>
          <div class="p-content">
            <div class="avat">
              <img src="" alt="">
            </div>
            <a href="/">1361184985</a>
            <p>0积分</p>
            <p><a href="/">2个话题收藏</a></p>
            <p><a href="/">@161184551</a></p>
            <a href="/">注册于1天前</a>
        </div>
        </div>
        <div class="panel">
          <div class="p-header">
            <span class="h-title">最近创建的话题</span>
          </div>
          <div class="p-content">
            <p>无话题</p>
          </div>
        </div>
        <div class="panel">
          <div class="p-header">
            <span class="h-title">最近参与的话题</span>
          </div>
          <div class="p-content">
            <p>无话题</p>
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
import mlink from '../../components/panel/link'
import erma from '../../components/panel/integral'
import firend from '../../components/panel/friend'
export default {
  data () {
    return {

    }
  },
  components: {
    VHeader,
    VFooter,
    mlink,
    firend,
    erma
  }
}
</script>

<style>
  .main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
  }
  .main .main-lf {
    margin-right: 305px;
    font-size: 14px;

  }
  .main-rt {
    width: 290px;
    float: right;
    margin-bottom: 20px;
  }
  .panel {
    margin-bottom: 13px;
    text-align: left;
  }
  .p-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0 ;
  }
  .p-content {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    line-height: 2em
  }
  .p-content p{
    margin-bottom: 10px;
  }
</style>
