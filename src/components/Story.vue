<template>
  <main>
    <header>
      <router-link to="/">
          <h3>
            S O P T
          </h3>
      </router-link>
    </header>
    <article>
        <section class="title">
            <h1>Story</h1>
        </section>
        <section class="content">

        </section>
    </article>
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
main h1 {
  color: white;
  font-size: 110px;
  display: inline-block;
  height: 200px;
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
  left: 3%;
  float: left;
}

a:hover{
  color: gray;
  
}
</style>
