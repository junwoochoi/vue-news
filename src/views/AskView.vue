<template>
  <div>
    <div v-for="item in fetchedAsk">{{item}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
    }
  },
  computed:{
   ...mapGetters([
     'fetchedAsk'
   ])
  },
  created(){
    this.$store.dispatch('FETCH_ASK')
  },
}
</script>

<style>

</style>