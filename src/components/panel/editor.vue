<template>
  <div class="main">
    <!-- <el-row> -->
      <quill-editor  v-model="content">
      </quill-editor>
    <!-- </el-row> -->
    <button class="btn" @click="subEditor">提交</button>
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      id: this.$route.params.id,
      content: '',
      storage: {}

    }
  },
  methods: {
    getStorage () {
      this.storage = JSON.parse(localStorage.getItem('user'))
    },
    subEditor () {
      this.$axios.post('https://cnodejs.org/api/v1/topic/' + this.id + '/replies', {
        content: this.content,
        accesstoken: this.storage.token,
        reply_id: this.id
      })
      this.content = ''
      this.$router.go(0)
    }
  },
  created () {
    this.getStorage()
    console.log(this.storage.token)
    // console.log(this.id)
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style>
  .quill-editor {
    padding-top: 20px;
  }
  .ql-container {
    min-height: 200px;
  }
  .ql-toolbar {
    height: 70px;
  }
  .btn {
    width: 150px;
    height: 30px;
    margin-top: 10px;
    float: left;
    overflow: hidden;
    background-color: rgb(162, 103, 218);
    color: #fff;
    border-radius: 3px;
    border: none;
  }
  .btn:hover {
    background-color: rgb(129, 70, 184);
    cursor: pointer;
  }
</style>
