<template>
  <div class="main">
    <v-left></v-left>
    <div class="content">
      <div class="a-panel">
        <div class="header">
          <ul class="branch">
            <li>
              <router-link to="/" class="jump">主页</router-link>
            </li>
            <li class="nov">/Node.js 新手入门</li>
          </ul>
        </div>
        <div class="inner">
          <div class="topic-inner">
            <div class="markdown-text">
              <h3>关于</h3>
              <p>CNode 社区作为国内最大最具影响力的Node.js 开源技术社区，致力于Node.js 的技术研究。</p>
              <p>CNode 社区由一批热爱Node.js技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对Node.js感兴趣的朋友。</p>
              <p>CNode 的SLA 保证是，一个9，即90.000000%</p>
              <p>社区目前由<a href="/">@alsotang</a>在维护，有问题请联系：<a href="/">https://github.com/alsotang</a></p>
              <p>请关注我们的官方微博：<a href="/">http://weibo.com/cnodejs</a></p>
              <h3>移动客户端</h3>
              <p>移动端由<a href="/">soluiry</a>开发维护</p>
              <p>源码地址：<a href="/">https://github.com/soliury/noder-react-native</a>.</p>
              <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
              <p>另，安卓用户同时选择：<a href="/">https://github.com/TakWolf/CNode-Material-Design </a>，这是Java原生开发的安卓客户端。</p>
            </div>
            <div class="about-friend-links">
              <h3>友情链接</h3>
              <a href="/">
                <img src="//static.cnodejs.org/Ftmw28ed0I_rir7YYz3c_jVPkCGx" alt="">
              </a>
              <a href="/">
                <img src="//static.cnodejs.org/FmU1Ik57z6wrl9JDTNdcYBTDetFq" alt="">
              </a>
              <a href="/">
                <img src="//static.cnodejs.org/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" alt="">
              </a>
              <a href="/">
                <img src="//static.cnodejs.org/Fq2cV_14IFHwelZ-6jey42Z0-eOR" alt="">
              </a>
              <a href="/">
                <img src="//static.cnodejs.org/FijGJbij9GObh5AXw-Vyu5LGn08a" alt="">
              </a>
              <a href="/">
                <img src="//static2.cnodejs.org/public/images/temp/sf.png" alt="">
              </a>
              <a href="/">
                <img src="//static2.cnodejs.org/public/images/temp/ionichina.png" alt="">
              </a>
            </div>
            <div class="logo">
              <h3>LOGO</h3>
              <p>白底：<a href="/"> /public/images/cnodejs.svg</a></p>
              <P>黑底: <a href="/">/public/images/cnodejs_light.svg</a></P>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VLeft from '../../Novice/novice-right/novice-right'
export default {
  data () {
    return {

    }
  },
  components: {
    VLeft
  }
}
</script>

<style>
  .main {
    width: 90%;
    margin: 15px auto;
    max-width: 1400px;
    min-width: 960px;
    min-height: 700px;
  }
  .content {
    padding: 0;
    margin-right: 305px;
  }
  .a-panel {
    margin-bottom: 13px;
  }
   .header {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 14px;
    border-radius: 3px 3px 0 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  h3 {
    border-bottom: 1px solid #eee;
    font-size: 24.5px;
    line-height: 40px;
    margin: 30px 0 15px;
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
  .jump {
    color: #80bd01;
    text-decoration: none
  }
  .nov {
    color: #999;
  }
  .inner {
    padding: 10px;
    border-top: 1px solid #e5e5e5;
    border-radius: 0 0 3px 3px;
    background:#fff;
  }
  .topic-inner {
    margin: 0 10px;
  }
  .topic-inner p {
    font-size: 15px;
    line-height: 1.7em;
    overflow: auto;
    margin: 1em 0;
  }
  .about-friend-links {
    text-align: left;
  }
  .about-friend-links img {
    width: 250px;
    height: 60px;
  }
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  .logo {
    text-align: left;
  }
</style>
