<template>
  <div class="main">
    <div class="sidebar">
      <login></login>
      <links></links>
      <answer></answer>
      <integral></integral>
      <friend></friend>
      <code2></code2>
    </div>
    <div class="content">
      <div class="con-header">
        <a href="/" class="tab">全部</a>
        <a href="/" class="tab">精华</a>
        <a href="/" class="tab">分享</a>
        <a href="/" class="tab">问答</a>
        <a href="/" class="tab">招聘</a>
        <a href="/" class="tab">客户端测试</a>
      </div>
      <div class="con-inner">
        <div class="in-list">
          <div class="cell">
            <a href="/" class="user-avatar pull-left">
              <img src="https://avatars1.githubusercontent.com/u/1147375?v=4&s=120" alt="">
            </a>
            <span class="replay pull-left" >
              <span class="replies" title="回复数">56</span>
              <span class="seperator">/</span>
              <span class="visits" title="点击数">4824</span>
            </span>
            <a href="/" class="last-time pull-right">
              <img class="avatar" src="https://avatars1.githubusercontent.com/u/43145163?v=4&s=120" alt="">
              <span class="active-time">天数</span>
            </a>
            <div class="wrapper">
              <span class="put-top">置顶</span>
              <a href="/" title="求tittle">求内用</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from '../panel/login'
import links from '../panel/link'
import answer from '../panel/answer'
import integral from '../panel/integral'
import friend from '../panel/friend'
import code2 from '../panel/code'
export default {
  data () {
    return {

    }
  },
  components: {
    login,
    links,
    answer,
    integral,
    friend,
    code2
  }
}
</script>

<style>
  .main {
    position: relative;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    min-height: 400px;
    margin: 15px auto;
  }
  .sidebar {
    width: 290px;
    float: right;
    font-size: 14px;
    margin-bottom: 0;
    min-height: 400px;
  }
  .content {
    font-size: 14px;
    padding: 0;
    margin-right: 305px;
    background: #fff;
    min-height: 2000px;
  }
  .con-header {
    text-align: left;
    padding: 10px;
    background: #f6f6f6;
    border: 3px 3px 0 0
  }
  .tab {
    text-decoration: none;
    color:  #80bd01;
    padding: 3px 4px;
    border-radius: 3px;
    margin: 0 10px;
  }
  .content .cell {
    padding-right: 10px;
    background: #fff
  }
  .cell {
    position: relative;
    padding: 10px 0 10px 10px;
    font-size: 14px;
    overflow: hidden;
  }
  .pull-left {
    float: left;
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
  }
  .put-top {
    background:#80bd01;
    padding: 2px 4px;
    color: #fff;
    font-size: 12px;
  }
</style>
