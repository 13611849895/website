<template>
<div >
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
