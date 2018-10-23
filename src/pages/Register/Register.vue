<template>
  <div class="register">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>

  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
import VMain from './m-register'
export default {
  name: 'Register',
  components: {
    VHeader,
    VFooter,
    VMain
  }
}
</script>

<style>

</style>
