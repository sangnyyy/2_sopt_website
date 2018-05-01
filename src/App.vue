<template>
  <div id="app">
    <main-header></main-header>
  </div>
</template>

<script>

import MainHeader from "./components/MainHeader"

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  text-align: center;
}
</style>
