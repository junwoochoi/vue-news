<template>
  <div id="app">
    <tool-bar/>
    <transition name="fade">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  name: 'app',
  components: {
    ToolBar
  }
}
</script>
<style>

body {
  padding: 0;
  margin: 0;
}
a{
  color: #45596e;
  text-decoration: none;
}

a:hover {
  color: #42b993;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
