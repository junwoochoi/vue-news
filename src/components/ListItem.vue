<template>
  <ul class="news-list">
    <li v-for="item in listItems" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="item.domain">
          <a :href="item.url">
          {{ item.title }}
          </a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" v-if="item.user">
              {{ item.user }}
            </router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  data(){
    return {
    }
  },
  computed:{
    listItems() {
      const { name } = this.$route;

      return this.$store.state[name] || null;
    }
  },
  created(){
    const { name } = this.$route;
    if(name === 'news'){
      this.$store.dispatch('FETCH_NEWS');
      return;
    }
    if(name === 'ask'){
      this.$store.dispatch('FETCH_ASK');
      return;
    }
    if(name === 'jobs'){
      this.$store.dispatch('FETCH_JOBS');
      return;
    }
  }
}
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #43c083;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>