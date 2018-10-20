<template>
  <div class="footer">
    <div class="f-main">
      <div class="links">
        <a class="dark" href="/">RSS</a>|
        <a class="dark" href="/">源码地址</a>
      </div>
      <div class="c-fade">
        <p>CNode 社区作为国内最专业的 Node.js 开源社区，致力于 Node.js 的技术研究。</p>
        <p>
          服务器赞助商为
          <a href="/">
            <img width="92px" src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="">
          </a>
          ，存储赞助商为
          <a href="/">
            <img width="115px"  src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="">
          </a>
          ，由
          <a href="/">
            <img height="54px" width="166px" src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="">
          </a>
          ，提供应用性能服务。
        </p>
        <p>
          新手搭建服 Node.js 服务器， 推荐使用无需备案的
          <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/</a>
        </p>
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
  .footer {
    position: relative;
    clear: both;
    background: #fff;
    clear: both;
  }
  .f-main {
    width: 90%;
    text-align: left;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    color: #e2e2e2;
    padding: 20px 0;
    font-size: 13px;
    line-height: 2em;
  }
  .dark {
    text-decoration: none;
    color: #666;
  }
  .c-fade {
    color: #ababab
  }
  .c-fade p {
    line-height: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    vertical-align: middle;
  }
  .c-fade p a {
    color: #08c;
    text-decoration: none;
    vertical-align: bottom;
  }
  .c-fade p a img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
</style>
