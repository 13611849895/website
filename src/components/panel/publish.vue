<template>
  <div class="panel">
    <div class="inner">
      <router-link to="/newarticle">
        <span class="pub">发布话题</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
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
    line-height: 2em;
    text-align: left;
  }
  .pub {
    border-radius: 3px;
    background-color: #80bd01;
    display: inline-block;
    padding: 3px 10px;
    font-size: 14px;
    cursor: pointer;
    color: #fff;

  }
</style>
