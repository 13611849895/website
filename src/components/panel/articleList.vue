<template>
  <div>
    <div class="con-inner" v-for="(item, index) of articleList" :key="index">
      <div class="in-list">
        <div  class="cell" >
          <a href="/" class="user-avatar pull-left">
            <img src="https://avatars1.githubusercontent.com/u/1147375?v=4&s=120" alt="">
          </a>
          <span class="replay pull-left" >
            <span class="replies" title="回复数">{{item.reply_count}}</span>
            <span class="seperator">/</span>
            <span class="visits" title="点击数">{{item.visit_count}}</span>
          </span>
          <a href="/" class="last-time pull-right">
            <img class="avatar" src="https://avatars1.githubusercontent.com/u/43145163?v=4&s=120" alt="">
            <span class="active-time">3 天前</span>
          </a>
          <div class="wrapper">
            <span class="put-top"></span>
            <a href="/" title="求tittle">{{item.title}}</a>
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
    }
  },
  components: {

  },
  computed: {
    tab () {
      return this.$store.state.tab
    },
    articleList () {
      return this.$store.state.articleList
    },
    isMore () {
      return this.$store.state.isMore
    }
  },
  created () {
    this.$store.commit('changeTab', {isLoading: true})
    this.$axios.get('https://cnodejs.org/api/v1/topics')
      .then(result => result.data.data)
      .then(articleList => this.$store.commit('changeTab', {articleList, isLoading: true}))
    // console.log(artList)
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
    background:#80bd01;
    padding: 2px 4px;
    color: #fff;
    font-size: 12px;
  }
  .wrapper a {
    color: #888;
    font-size: 16px;
    line-height: 30px;
    display: inline-block;
    vertical-align: middle;
  }
  .wrapper a:hover {
    text-decoration: underline;
  }
</style>
