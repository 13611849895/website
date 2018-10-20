<template>
  <div id="app">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from './components/header/header'
import VMain from './components/main/main'
import VFooter from './components/footer/footer'
export default {
  name: 'App',
  components: {
    VHeader,
    VMain,
    VFooter
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e1e1e1;
}
</style>
