<template>
  <div>
    <ul class="news-list">
        <li v-for="item in fetchedJobs" class="post">
          <div class="points">
            {{item.points || 0}}
          </div>
          <div>
            <p class="news-title">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by
              <a :href="item.url">{{ item.domain || 'empty' }}</a>
            </small>
          </div>
        </li>
      </ul>
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