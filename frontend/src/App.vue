<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
