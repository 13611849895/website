<template>
  <div>
    <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../../components/header/header'
import VFooter from '../../components/footer/footer'
export default {
  // name: article,
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    VHeader,
    VFooter
  },
  created () {
    this.$axios.get('https://cnodejs.org/api/v1/topic/' + this.id)
      .then(res => console.log(res.data.data))
  }
}
</script>

<style>
</style>
