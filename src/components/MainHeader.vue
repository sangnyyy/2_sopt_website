<template>
    <main>
        <img src="../../img/main_image.png">
        <h1>SOPT</h1>
    </main>
</template>

<script>
export default {
    
};
</script>

<style>
main {
  height: 100%;
  text-align: center;
}
main > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
main > h1 {
  position: relative;
  top : 35%;
  transform: translateY(-50%);
  font-size: 200px;
  display: inline-block;
  z-index: 2;
}
</style>
