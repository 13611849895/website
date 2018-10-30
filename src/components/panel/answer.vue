<template>
 <div class="panel">
   <div class="hdr">
     <span class="no-answer">未回复的信息</span>
   </div>
   <div class="inner">
     <ul class="unstyled">
       <li>
         <a href="/">这是要获取的内容</a>
       </li>
       <li>
         <a href="/">这是要获取的内容1</a>
       </li>
       <li>
         <a href="/">这是要获取的内容2</a>
       </li>
       <li>
         <a href="/">这是要获取的内容3</a>
       </li>
       <li>
         <a href="/">这是要获取的内容4</a>
       </li>
       <li>
         <a href="/">这是要获取的内容5</a>
       </li>
     </ul>
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
  .panel {
    font-size: 13px;
    margin-bottom: 13px;
  }
  .hdr {
    text-align: left;
    color: #51585c;
    padding: 10px;
    border-radius: 3px 3px 0 0;
    background-color: #f6f6f6;
  }
  .no-answer {
    text-align: left;
    font-size: 13px;
    color: #444;
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
  }
  .inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
  }
  .unstyled {
    list-style: none;
    margin-left: 0;
    text-align: left;
    margin-bottom: 10px;
  }
  .unstyled li {
    line-height: 2em
  }
  .unstyled li a {
    font-size: 14px;
    color: #778087;
    max-width: 270px;;
  }
</style>
