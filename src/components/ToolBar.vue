<template>
  <div class="header">
     <router-link to="/news">news</router-link> |
     <router-link to="/jobs">jobs</router-link> |
     <router-link to="/ask">ask</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header {
        color: white;
        background-color: #42b883;
        display: flex;
        padding: 16px;
        font-size: 1.5rem;
    }
    .header .router-link-exact-active{
        color: #35495e;
    }
    .header a{
        color: white;
        margin-left: 4px;
    }
</style>