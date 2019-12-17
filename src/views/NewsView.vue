<template>
  <div>{{users}}</div>
</template>

<script>
import {fetchNewsList} from '../api';

export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    fetchNewsList()
    .then(res => this.users = res.data)
    .catch(e => console.error(e))
  }
}
</script>

<style>

</style>