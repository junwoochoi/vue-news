<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :user-info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
      <!-- 댓글 -->
     <div v-html="fetchedItem.content"/>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile
  },
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

<style scoped>

.time {
  font-size: 0.75rem;
}
</style>