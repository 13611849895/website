<template>
  <div class="theader">
    <div class="navbar-inner">
      <div class="container">
        <a href="/" class="brand">
          <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
        </a>
        <form action="/search" id="search_form" class="navbar-search">
        <input type="text" name="q" id="q" class="search-query span3"></form>
        <ul class="nav pull-right">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/novice">新手入门</router-link>
          </li>
          <li>
            <router-link to="/interface">API</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <router-link to="/register">注册</router-link>
          </li>
          <li>
            <router-link to="/entry">登录</router-link>
          </li>
        </ul>
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
  .theader {
    position: relative;
    width: 100%;
    /* height: 50px; */
    background: #444;
    font-size: 13px;
    }
    .navbar-inner {
      width: 90%;
      margin: auto;
      padding: 5px;
    }
    .container {
      overflow: hidden;
      width: 100%;
      min-width: 960px;
      margin: 0 auto;
      max-width: 1400px;
    }
    .brand {
      display: block;
      float: left;
      margin-left: -20px;
      font-size: 20px;
      width: 120px;
      padding: 3px 20px;
      height: 34px;
      line-height: 34px;
      color: #ccc;
      font-weight: 700;
    }
    .brand img {
      vertical-align: initial;
      height: auto;
      width: 100%;
    }
    .navbar-search {
      position: relative;
      float: left;
      margin-top: 6px;
      margin-bottom: 0;
    }
    .search-query {
      background-color: #888;
      display: inline-block;
      padding: 3px 5px 3px 22px;
      color: #666;
      border: 0;
      height: 20px;
      min-height: 1px;
      margin-top: 2px;
      margin-bottom: 0;
      font-size: 13px;
      font-weight: 400;
      line-height: 1;
      border-radius: 15px;
      width: 206px;
    }
    .search-query:hover {
      background: #FFF;
      transition: all 0.5s;
    }
    .pull-right {
      position: relative;
      float: right;
      display: block;
      left: 0;
      padding: 0;
      /* margin: 0 10px 0 0; */
    }
    .nav li {
      list-style: none;
      line-height: 20px;
      float: left;
    }
    .nav li a {
      display: block;
      color: #ccc;
      text-decoration: none;
      padding: 10px 15px;
      font-size: 13px;
      font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    }
    .nav li a:hover {
      color: #fff;
    }

</style>
