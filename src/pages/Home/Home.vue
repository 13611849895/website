<template>
  <div class="home">
    <v-header></v-header>
    <v-main>
    </v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VMain from '../../components/main/main'
import VFooter from '../../components/footer/footer'
export default {
  name: 'Home',
  components: {
    VHeader,
    VMain,
    VFooter

  }
}
</script>

<style>
  .home {
    background-color: #e1e1e1;
  }
</style>
