<template>
  <div>
    <user-profile :user-info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }},</span>
      <span slot="karma">{{ userInfo.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile';

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    this.$store.dispatch('FETCH_USER', this.$route.params.id)
  }
}
</script>

<style>

</style>