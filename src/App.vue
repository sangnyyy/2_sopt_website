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
  height: 100%;
  text-align: center;
}
</style>
