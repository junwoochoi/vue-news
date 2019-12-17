<template>
  <div>
    <div v-for="item in fetchedNews">{{item}}</div>
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
      'fetchedNews'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style>

</style>