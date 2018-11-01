<template>
  <div class="article">
    <v-header></v-header>
    <div class="main">
      <div class="content-right">
        <alink></alink>
        <answer></answer>
      </div>
      <div class="content-left">
        <div class="panel">
          <div class="cl-header">
            <span class="flag">{{articleMain.title}}</span>
            <div class="infoma">
              <span>发布于{{changeTime(articleMain.create_at)}}</span>
              <!-- <span>作者：<router-link to="/">{{articleMain.author.loginname}}</router-link></span> -->
              <span>{{articleMain.visit_count}}次浏览</span>
              <span>来自 {{types[articleMain.tab]}}</span>
              <input type="submit" class="collect" value="收藏">
            </div>
          </div>
          <div class="cl-inner"  v-html="articleMain.content"></div>
        </div>
        <div class="panel">
          <div class="arlist-header">
            <span>{{articleMain.reply_count}} 回复</span>
          </div>
          <div v-for="(item,index) of articleMain.replies" :key="index" class="arlist">
            <div class="comment-header">
              <a href="/" class="user-avatar">
                <img :src="item.author.avatar_url" alt="">
              </a>
              <div class="user-info">
                <a :href="item.author.loginname" class="cname">{{item.author.loginname}}  </a>
                <a href="/" class="heig"> {{index+1}}楼 {{changeTime(item.create_at)}}</a>
              </div>
              <div class="user-action"></div>
            </div>
            <div v-html="item.content" class="comment-content"></div>
          </div>
        </div>
        <div class="panel">
          <edtior></edtior>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
import alink from '../../components/panel/link'
import answer from '../../components/panel/answer'
import edtior from '../../components/panel/editor'
export default {
  // name: article,
  data () {
    return {
      id: this.$route.params.id,
      articleMain: [],
      types: {shar: '分享', ask: '问答', job: '招聘'}
    }
  },
  components: {
    VHeader,
    VFooter,
    alink,
    answer,
    edtior
  },
  created () {
    this.$axios.get('https://cnodejs.org/api/v1/topic/' + this.id)
      .then(res => { this.articleMain = res.data.data })
  },
  mounted () {
    console.log(this.articleMain)
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style>
.article {
  background-color: #e1e1e1;
}
  .main {
    position: relative;
    margin: 15px auto;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    min-height: 400px;
  }
  .content-left {
    padding: 0;
    margin-right: 305px;
    /* background-color: #fff; */
  }
  .content-right {
    width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
  }
  .inner {
    background-color: #fff
  }
  .cl-inner {
    margin: 0 20px;
    text-align: left;
    border-top: 1px solid #e5e5e5;
    padding: 10px 0;
  }
  .markdown-text>:first-child {
    margin-top: 0;
  }
  .markdown-text img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  .markdown-text ul,ol {
    padding: 0;
    margin: 0 0 10px 25px;
  }
  .markdown-text h1,h2,h3,h4 {
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    font-size: 24.5px;
    line-height: 40px;
    font-family: inherit;
  }
  .markdown-text p {
    margin: 1em 0;
    font-size: 15px;
    overflow: auto;
    line-height: 1.7em;
  }
  .markdown-text a {
    color: #08c;
  }
  blockquote {
    padding: 0 0 0 15px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
  }
  hr {
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
  }
  .panel {
    margin-bottom: 13px;
  }
  .prettyprint {
    font-size: 14px;
    border-radius: 0;
    padding: 15px;
    margin: 20px -10px;
    border-width: 1px 0;
    background: #f7f7f7;
    tab-size: 4;
  }
  pre code {
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
  }
  .markdown-text code {
    color: #000;
    background-color: #fcfcfc;
    font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
    padding: 4px 6px;
    font-size: 12px;
  }
  .markdown-text li {
    line-height: 2em
  }
  .com {
    color: #800
  }
  .cl-header {
    padding: 10px 10px;;
    border-radius: 3px 3px 0 0;
    text-align: left;
    overflow: hidden;

  }
  .flag {
    font-size: 22px;
    font-weight: 800;
    margin: 8px 0 ;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
  }
  .infoma {
    font-size: 12px;
    color: #838383;
  }
  .infoma span {
    padding-left: 20px;
    overflow: hidden;
  }
  .collect {
    float: right;
    /* display: inline-block; */
    color: #fff;
    background: #80bd01;
    box-shadow: none;
    border: none;
    padding: 3px 10px;
    letter-spacing: 2px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: bottom;
    font-size: 14px;
  }
  .panel {
    margin-bottom: 13px;
    background-color: #fff;
  }
  .arlist-header {
    padding: 10px;
    background: #f6f6f6;
    border-radius: 3px 3px 0 0;
    font-size: 14px;
    text-align: left;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    color: #444;
  }
  .arlist {
    padding: 10px;
    border-top: 1px solid #f0f0f0;
    text-align: left;
  }
  .arlist .comment-content {
    padding-left: 50px
  }
  .user-avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: middle;
  }
  .user-info {
    padding-left: 10px;
    display: inline-block;
  }
  .cname {
    text-decoration: none;
    color: #666;
    font-size: 12px;
    font-weight: 700;
  }
  .heig {
    text-decoration: none;
    color: #08c;
    font-size: 11px;
  }
</style>
