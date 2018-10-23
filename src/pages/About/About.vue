<template>
  <div class="about">
    <v-header></v-header>
    <v-main></v-main>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
import VMain from './a-main/a-left'
export default {
  components: {
    VHeader,
    VFooter,
    VMain
  }
}
</script>

<style>

</style>
