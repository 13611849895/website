<template>
 <div class="panel">
   <div class="log-header">
     <span class="log-info">个人信息</span>
   </div>
   <div class="log-inner">
     <div class="user-info">
       <div>
         <router-link to="/user" class="user-avatar">
        <img :src="storage.avatar_url" alt="" class="user-img">
       </router-link>
       <span class="user-name">
        <router-link to="/user" >{{storage.loginname}}</router-link>
       </span>
       </div>
       <div>
         <span class="score">积分：0</span>
       </div>
       <span class="msg">"这家伙很懒，什么个性签名都没留下"</span>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      storage: {}
    }
  },
  methods: {
    getStorage () {
      this.storage = JSON.parse(localStorage.getItem('res'))
    }
  },
  created () {
    this.getStorage()
    console.log(this.storage.avatar_url)
  },
  watch: {
    '$route' (to, from) {
      this.$router.go(0)
    }
  }
}
</script>

<style>
  .panel {
    font-size: 13px;
    margin-bottom: 13px;
  }
  .log-header {
    padding: 10px;
    background-color: #f6f6f6;
    text-align: left;
    border-radius: 3px 3px 0 0;
  }
  .log-info {
    color: #444;
    /* text-align: left; */

  }
  .log-inner {
    padding: 10px;
    border-radius: 0 0 3px 3px;
    background-color: #fff;
    text-align: left;

  }
  .user-avatar {
    text-align: left;
    vertical-align: top
  }
  .user-img {
    width: 48px;
    height: 48px;
    border-radius: 3px;
  }
  .user-name {
    font-size: 16px;
    white-space: nowrap;
    display: inline-block;
    vertical-align: top;
    margin-top: 20px;
  }
  .score {
    display: inline-block;
    margin-top: 15px;
  }
  .msg {
    display: inline-block;
    margin-top: 15px;
    font-style: italic;
  }
  .user-name a {
    text-decoration: none;
    color: #778087;
  }
</style>
