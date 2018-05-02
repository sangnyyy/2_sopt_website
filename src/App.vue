<template>
  <div id="app">
    <img src="../img/main_image.png">
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import Home from "./components/Home"
import Notice from "./components/Notice"
import About from "./components/About"
import Story from "./components/Story"
import Faq from "./components/Faq"
import Recruit from "./components/Recruit"

export default {
  name: 'App',
  components: {
    Home, Notice, About, Story, Faq, Recruit
  }
}
</script>

<style>
#app {
  height: 100%;
  text-align: center;
}
#app img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.router-anim-enter-active{
  animation: coming 1.5s;
  animation-delay: 1s;
}
.router-anim-leave-active{
  animation: going 1.5s;
}

@keyframes going {
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-100px);
    opacity: 0;
  }
}

@keyframes coming {
  from{
    transform: translateX(-100px);
    opacity: 0;
  }
  to{
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
