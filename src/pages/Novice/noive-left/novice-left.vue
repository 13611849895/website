<template>
  <div>
    <div class="header">
      <ul class="branch">
        <li>
           <router-link to="/" class="jump">主页</router-link>
        </li>
        <li class="nov">/Node.js 新手入门</li>
      </ul>
    </div>
    <div class="cn-inner">
      <div class="topic-content">
        <div class="markdown-text">
          <h2 class="hv">Node.js入门</h2>
          <p>《<strong>快速搭建Node.js 开发环境以及加速 npm</strong>》</p>
          <p><a href="/">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
          <p>《<strong>Node.js 包教不包会</strong>》</p>
          <p><a href="/">https://github.com/alsotang/node-lessons</a></p>
          <p>《<strong>ECMAScript 6入门</strong>》</p>
          <p><a href="/">http://es6.ruanyifeng.com/</a></p>
          <p>《<strong>七天学会NodeJS</strong>》</p>
          <p><a href="/">https://github.com/nqdeng/7-days-nodejs</a></p>
          <h2>Node.js资源</h2>
          <p>《<strong>前端资源教程</strong>》</p>
          <p><a href="/">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
          <p>《<strong>国内的 npm 镜像源</strong>》</p>
          <p><a href="/">http://cnpmjs.org/</a></p>
          <p>《<strong>node weekly</strong>》</p>
          <p><a href="/">http://nodeweekly.com/issues</a></p>
          <p>《<strong>node123-node.js中文资料导航</strong>》</p>
          <p><a href="/">https://github.com/youyudehexie/node123</a></p>
          <p>《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
          <p><a href="/">https://github.com/sindresorhus/awesome-nodejs</a></p>
          <p>《<strong>Node.js Books</strong>》</p>
          <p><a href="/">https://github.com/pana/node-books</a></p>
          <h2>Node.js 名人</h2>
          <p>《<strong>名人堂</strong>》</p>
          <p><a href="/">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
          <h2>Node.js 服务器</h2>
          <p>新手搭建Node.js 服务器，推荐使用无需备案的
            <a href="/">DigitalOcean(https://www.digitalocean.com/)</a>
          </p>
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

  }
}
</script>

<style>
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
    border-radius: 3px 3px 0 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .branch {
    padding: 0;
    margin: 0;
    text-align: left;
  }
  .branch li {
    display: inline-block;
    line-height: 20px;
    list-style: none
  }
  .topic-content {
    margin: 0 10px;

  }
  .jump {
    color: #80bd01;
    text-decoration: none
  }
  .nov {
    color: #999;
  }
  .cn-inner {
    border-top: 1px solid #e5e5e5;
    padding: 10px;
    background: #fff;
    border-radius: 0 0 3px 3px;
  }
  .cn-inner p {
    font-size: 15px;
    line-height: 1.7em;
    margin: 1em 0;
    overflow: auto;
    margin-bottom: 10px;
    text-align: left;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  .cn-inner p strong {
    font-weight: 700;
  }
  .cn-inner h2 {
    font-size: 26px;
    margin: 30px 0 15px;
    border-bottom: 1px solid #eee;
    line-height: 40px;
    font-weight: 700;
    text-align: left;
    font-family: inherit;
  }
  .cn-inner a {
    color: #08c
  }
  .cn-inner .hv {
    margin-top:0
  }

</style>
