<template>
    <main>
        <div>
            <transition appear appear-active-class="animated rotateIn">
                <h1>S O P T</h1>
            </transition>
            <transition appear appear-active-class="animated bounceInLeft">
                <h2>"SHOUT OUR PASSION TOGETHER"</h2>    
            </transition>
                <router-link to="/about">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            About
                        </h3>
                    </transition>
                </router-link>
                <router-link to="/recruit">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            Recruit
                        </h3>
                    </transition>
                </router-link>
                <router-link to="/faq">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            F.A.Q
                        </h3>
                    </transition>
                </router-link>
                <a href="http://www.sopt.org/wp/">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            Homepage
                        </h3>
                    </transition>

                </a>
            </div>
        
    </main>
</template>

<script>
export default {
  data: function() {
    return {
      show: true
    };
  },
  methods: {
    mouseOver: function() {}
  }
};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
main div{
    position: relative;
    top: 15%;
    display: inline-block;
    text-align: center;
}
main h1 {
  color: white;
  font-size: 200px;
  display: inline-block;
  height: 290px;

  /* height: 250px; */
}
main h2 {
  color: white;
  font-size: 60px;
}
main a {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 40px;
  margin-right: 3%;
  display: inline;
  -webkit-transition : font-size 1s;
  transition: font-size 1s;
}
h3 {
  display: inline-block;
}
main a:hover {
  color: gray;
  font-size: 300%;
  transition-duration: 0.5s;
}



</style>
