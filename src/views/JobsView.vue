<template>
  <div>
    <div v-for="item in fetchedJobs">{{item}}</div>
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
      'fetchedJobs'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>