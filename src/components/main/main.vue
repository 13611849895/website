<template>
  <div class="main">
    <main-right></main-right>
    <div class="content">
      <main-left></main-left>
    </div>
  </div>
</template>

<script>
import mainLeft from '../panel/main-left'
import mainRight from '../panel/main-right'
export default {
  data () {
    return {

    }
  },
  components: {
    mainLeft,
    mainRight
  }
}
</script>

<style>
  .main {
    position: relative;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    min-height: 400px;
    margin: 15px auto;
  }
  .main .content {
    font-size: 14px;
    padding: 0;
    margin-right: 305px;
    background: #fff;
    /* min-height: 2000px; */
  }
</style>
