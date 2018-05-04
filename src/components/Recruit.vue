<template>
  <main>
    <header>
      <router-link to="/">
          <h3>
            S O P T
          </h3>
      </router-link>
    </header>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
header {
    height: 100px;
}
a{
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 50px;
  display: inline;
  left: 80px;
  float: left;
}

a:hover{
  color: gray;
  
}
</style>
