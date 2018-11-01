<template>
  <div class="main">
    <!-- <el-row> -->
      <quill-editor  v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
    <!-- </el-row> -->
    <button class="btn">提交</button>
  </div>
</template>

<script>
// import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      content: '',
      editorOption: {}
    }
  },
  methods: {
    onEditorBlur (editor) { // 失去焦点事件
    },
    onEditorFocus (editor) { // 获得焦点事件
    },
    onEditorChange ({editor, html, text}) { // 编辑器文本发生变化
      // this.content可以实时获取到当前编辑器内的文本内容
      console.log(this.content)
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
