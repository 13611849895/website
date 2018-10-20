<template>
  <div class="friend">
    <div class="f-header">
      <span class="f-title">友情社区</span>
    </div>
    <div class="inner">
      <ol>
        <li>
          <a href="/">
            <img class="fimg" src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="">
          </a>
        </li>
        <li>
          <a href="/">
            <img class="fimg" src="https://static2.cnodejs.org/public/images/golangtc-logo.png" alt="">
          </a>
        </li>
        <li>
          <a href="/">
            <img class="fimg" src="https://static2.cnodejs.org/public/images/phphub-logo.png" alt="">
          </a>
        </li>
        <li>
          <a href="/">
            <img class="fimg" src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="">
          </a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {}
}
</script>

<style>
  .friend {
    font-size: 13px;
    margin-bottom: 13px;
  }
  .f-header {
    text-align: left;
    padding: 10px;
    color: #51585c;
    border-radius: 3px 3px 0 0;
    background: #f6f6f6;
  }
  .f-title {
    color: #444;
  }
  .inner {
    padding: 10px;
    background: #fff;
    border-radius: 0 0 3px 3px;
  }
  .inner ol {
    list-style: none;
  }
  .inner ol li {
    line-height: 2em;
  }
  .inner ol li a {
    text-decoration: none;
  }
  .fimg {
    width: 150px;
    height: auto;
    vertical-align: middle;
    max-width: 100%;
  }
</style>
