<template>
  <div class="sidebar">
    <login></login>
    <links></links>
    <friend></friend>
    <code2></code2>
  </div>
</template>

<script>
import login from '../../../components/panel/login'
import links from '../../../components/panel/link'
import friend from '../../../components/panel/friend'
import code2 from '../../../components/panel/code'
export default {
  components: {
    login,
    links,
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
