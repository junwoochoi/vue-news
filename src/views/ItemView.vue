<template>
  <div>{{fetchedItem}}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id)
  }
}
</script>

<style>

</style>