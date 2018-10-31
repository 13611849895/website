<template>
  <div class="sidebar">
    <login v-show="!storage"></login>
    <info v-show="storage"></info>
    <publish></publish>
    <links></links>
    <answer></answer>
    <integral></integral>
    <friend></friend>
    <code2></code2>
  </div>
</template>

<script>
import login from '../panel/login'
import info from '../panel/info'
import links from '../panel/link'
import answer from '../panel/answer'
import integral from '../panel/integral'
import friend from '../panel/friend'
import code2 from '../panel/code'
import publish from '../panel/publish'
export default {
  data () {
    return {
      storage: {}
    }
  },
  components: {
    login,
    links,
    answer,
    integral,
    friend,
    code2,
    info,
    publish
  },
  methods: {
    getStorage () {
      this.storage = localStorage.getItem('res')
    }
  },
  created () {
    this.getStorage()
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
