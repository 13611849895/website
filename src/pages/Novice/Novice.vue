<template>
  <div class="novice">
    <v-header></v-header>
    <main class="main">
      <novice-right></novice-right>
      <div class="content">
        <novice-left></novice-left>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
import NoviceLeft from './noive-left/novice-left'
import NoviceRight from './novice-right/novice-right'
export default {
  name: 'Novice',
  data () {
    return {

    }
  },
  components: {
    VHeader,
    VFooter,
    NoviceLeft,
    NoviceRight
  }
}
</script>

<style>
  .main {
    position: relative;
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 650px;;
  }
  .content {
    margin-right: 305px;
    padding: 0;

  }
</style>
