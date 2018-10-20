<template>
  <div class="integral">
    <div class="i-header">
      <span class="i-title">积分榜</span>
      <a href="/">TOP 100 >></a>

    </div>
    <div class="inner">
      <ol>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
        <li>
          <span class="score">需要获取的积分数</span>
          <span class="user-name">
            <a href="/">需要获取的用户ID</a>
          </span>
        </li>
      </ol>
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
  .integral {
    margin-bottom: 13px;
    font-size: 13px;
  }
  .i-header {
    text-align: left;
    color: #51585c;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    background-color: #f6f6f6;
  }
  .i-header a {
    text-decoration: none;
    color: #666;
  }
  .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background: #fff;
  }
  .inner ol {
    list-style: none;
    text-align: left;
  }
  .score {
    color: gray;
    padding: 2px;
    margin-right: 10px;
  }
  .username {
    max-width: 120px;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
  }
</style>
