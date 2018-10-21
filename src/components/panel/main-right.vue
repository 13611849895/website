<template>
  <div class="sidebar">
    <login></login>
    <links></links>
    <answer></answer>
    <integral></integral>
    <friend></friend>
    <code2></code2>
  </div>
</template>

<script>
import login from '../panel/login'
import links from '../panel/link'
import answer from '../panel/answer'
import integral from '../panel/integral'
import friend from '../panel/friend'
import code2 from '../panel/code'
export default {
  components: {
    login,
    links,
    answer,
    integral,
    friend,
    code2

  }
}
</script>

<style>
  .sidebar {
    width: 290px;
    float: right;
    font-size: 14px;
    margin-bottom: 0;
    min-height: 400px;
  }
</style>
