<template>
 <div class="panel">
   <div class="inner">
     <p>CNode:Node.js专业中文社区</p>
     <div>
        您可以
        <a href="/"> 登录 </a>
        或
        <a href="/"> 注册 </a>，也可以
        <a href="/">
          <span class="span-info">通过Github 登录</span>
        </a>
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

  }
}
</script>

<style>
  .panel {
    margin-bottom: 13px;
    font-size: 13px;
  }
  .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    line-height: 2em;
  }
  .inner p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .inner a {
    color: #778087;
    text-decoration: none;
  }
  .span-info {
    display: block;
    padding: 3px 10px;
    background-color: #5bc0de;
    color: #fff;
  }
</style>
