<template>
  <div>
    <div class="con-header">
      <a @click="toogle(index)" v-for="(item, index) in tabs" :class="{active: active === index}" :key="index">{{item.text}}</a>
    </div>
    <div class="con-inner" v-for="(item, index) of articleList" :key="index">
      <div class="in-list">
        <div  class="cell" >
          <a href="/" class="user-avatar pull-left">
            <img :src="item.author.avatar_url" alt="">
          </a>
          <span class="replay pull-left" >
            <span class="replies" title="回复数">{{item.reply_count}}</span>
            <span class="seperator">/</span>
            <span class="visits" title="点击数">{{item.visit_count}}</span>
          </span>
          <a href="/" class="last-time pull-right">
            <img class="avatar" :src="item.author.avatar_url" alt="">
            <span class="active-time">{{changeTime(item.last_reply_at)}}</span>
          </a>
          <div class="wrapper">
            <span class="put-top" :class="{special: item.top || item.good}">{{(item.top ? '置顶' : '')||(item.good ? "精华" : "")||types[item.tab]}}</span>
            <!-- <a href="/" class="con-inner" title="">{{item.title}}</a> -->
            <router-link :to="{name: 'article', params: {id: item.id}}" class="con-inner">{{item.title}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleList: [],
      tabName: '',
      active: 0,
      tabs: [
        {
          text: '全部'
        },
        {
          text: '精华'
        },
        {
          text: '分享'
        },
        {
          text: '问答'
        },
        {
          text: '招聘'
        },
        {
          text: '客户端测试'
        }
      ],
      types: {
        ask: '问答',
        share: '分享',
        good: '精华'
      }
    }
  },
  methods: {
    getList (index) {
      this.$axios.get('https://cnodejs.org/api/v1/topics', {
        params: {
          tab: index
        }
      }).then(response => {
        this.articleList = response.data.data
      })
    },
    toogle (index) {
      // var tabName
      if (index === 0) {
        this.tabName = ''
        this.getList(this.tabName)
      }
      if (index === 1) {
        this.tabName = 'good'
        this.getList(this.tabName)
      }
      if (index === 2) {
        this.tabName = 'share'
        this.getList(this.tabName)
      }
      if (index === 3) {
        this.tabName = 'ask'
        this.getList(this.tabName)
      }
      if (index === 4) {
        this.tabName = 'job'
        this.getList(this.tabName)
      }
      if (index === 5) {
        this.tabName = 'dev'
        this.getList(this.tabName)
      }
      this.active = index
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>
  .content .cell   {
    padding-right: 10px;
    background: #fff
  }
  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    overflow: hidden;
    border-top: 1px solid #f0f0f0;
  }
  .con-inner {
    line-height: 2em;
  }
  .con-header {
    text-align: left;
    padding: 10px;
    background: #f6f6f6;
    border: 3px 3px 0 0
  }
  .con-header a {
    margin: 0 10px;
    color: #80bd01;
    text-decoration: none;
  }
  .con-header a:hover {
    /* color: #005580; */
    cursor: pointer;
  }
  .con-header .active {
    color: #fff;
    padding: 3px 4px;
    background-color: #80bd01;
    border-radius: 3px;
  }
  .pull-left {
    float: left;
    line-height: 2em;
  }
  .pull-left img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    border: 0;
  }
  .replay {
    width: 70px;
    text-align: center;
    display: inline-block;
  }
  .replies {
    color: #9e78c0
  }
  .seperator {
    margin: 0 -3px;
    font-size: 10px
  }
  .visits {
    font-size: 10px;
    color: #b4b4b4
  }
  .pull-right {
    float: right
  }
  .last-time {
    text-decoration: none;
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #778087
  }
  .avatar {
    height: 18px;
    width: 18px;
    vertical-align: middle;
    margin-right: 0.5em;
    border-radius: 3px;
  }
  .active-time {
    text-align: center;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
  }
  .wrapper {
    white-space: nowrap;
    text-overflow: ellipsis;
    position: absolute;
    margin-left: 100px;
  }
  .put-top {
    /* background:#80bd01;
    padding: 2px 4px;
    color: #fff;
    font-size: 12px; */
    background-color: #e5e5e5;
    padding: 2px 5px;
    font-size: 80%;
    color: #9c9c9c;
    border-radius: 5px;
    margin-right: 3px;
  }
  .special {
    background:#80bd01;
    padding: 2px 4px;
    color: #fff;
    font-size: 12px;
  }
  .wrapper .con-inner {
    color: #888;
    font-size: 16px;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
    /* max-width: 70%; */
    width: 700px;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    text-align: left;
    overflow: hidden;
  }
  .wrapper a:hover {
    text-decoration: underline;
  }
</style>
