<template>
  <div class="sidebar">
    <links></links>
    <friend></friend>
    <code2></code2>
  </div>
</template>

<script>
import links from '../../../components/panel/link'
import friend from '../../../components/panel/friend'
import code2 from '../../../components/panel/code'
export default {
  components: {
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
