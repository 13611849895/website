<template>
  <div class="main">
    <div class="content">
      <div class="m-panel">
        <div class="header">
          <ul class="branch">
            <li>
              <router-link to="/" class="jump">主页</router-link>
            </li>
            <li class="nov">/注册新的账号</li>
          </ul>
        </div>
        <div class="inner">
          <form id="from_signin">
            <div class="control-group">
              <label class="control-label">通过 GitHub 账号</label>
              <div class="controls">
                <input type="submit" class="span-info" value="注册新的账号">
              </div>
            </div>
          </form>
          <form id="from_sinin">
            <div class="control-group">
              <label class="controls">或者</label>
            </div>
            <div class="control-group">
              <label for="name" class="control-label">用户名</label>
              <div class="controls">
                <input type="text" name="name" class="u-name inp" size="30" id="name">
              </div>
            </div>
            <div class="control-group">
              <label for="pass" class="control-label">密码</label>
              <div class="controls">
                <input type="password" name="pass" id="pass" class="u-name inp">
              </div>
            </div>
            <div class="from-actions">
              <input type="submit" class="span-primary" value="关联旧账号">
            </div>
          </form>
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
    .main {
    width: 90%;
    margin: 15px auto;
    max-width: 1400px;
    min-width: 960px;
    min-height: 650px;
  }
  .content {
    padding: 0;
    margin-right: 305px;
  }
  .m-panel {
    margin-bottom: 13px;
  }
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
  .jump {
    color: #80bd01;
    text-decoration: none
  }
  .nov {
    color: #999;
  }
  .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background: #fff;
  }
  #from_signin{
    margin-top: 40px;
    margin-bottom: 0;
  }
  .control-group {
    margin-bottom: 20px;
    text-align: left

  }
  .control-label {
    float: left;
    width: 160px;
    padding-top: 5px;
    text-align: right;
    display: block;
  }
  .controls {
    margin-left: 180px;

  }
  label {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
  .span-info {
    text-align: left;
    display: inline-block;
    margin-bottom: 0;
    padding: 3px 10px;
    border: none;
    font-size: 14px;
    transition: all .5s;
    border-radius: 3px;
    background-color: #5bc0de;
    color: #fff;
    line-height: 2em;
    vertical-align: middle;
  }
  .inp {
    width: 270px;
    padding: 4px 6px;
    height: 20px;
    border-radius: 4px;
    box-shadow: none;
  }
  .inner .from-actions {
    text-align: left;
    margin: 160px;
    border-top: none;
    background-color: #fff;
    padding: 19px 20px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .span-primary {
    border-radius: 3px;
    background-color: #08c;
    border: none;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    line-height: 2em;
    color: #fff
  }
</style>
