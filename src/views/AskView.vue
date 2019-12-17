<template>
  <div>
    <div v-for="item in ask">{{item}}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api'

export default {
  data(){
    return {
      ask: []
    }
  },
  created(){
    fetchAskList()
    .then(res => this.ask = res.data)
    .catch(e => console.error(e))
  }
}
</script>

<style>

</style>