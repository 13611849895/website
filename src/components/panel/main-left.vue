<template>
<div >
  <div class="con-header">
    <a href="/" class="tab">全部</a>
    <a href="/" class="tab">精华</a>
    <a href="/" class="tab">分享</a>
    <a href="/" class="tab">问答</a>
    <a href="/" class="tab">招聘</a>
    <a href="/" class="tab">客户端测试</a>
  </div>
  <article-list></article-list>
</div>
</template>

<script>
import articleList from '../panel/articleList'
export default {
  data () {
    return {
    }
  },
  components: {
    articleList
  }
}
</script>

<style>
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

</style>
