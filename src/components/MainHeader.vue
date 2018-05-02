<template>
    <main>
        <img src="../../img/main_image.png">
        <div>
            <transition appear appear-active-class="animated shake">
                <h1>SOPT</h1>
            </transition>
            <transition appear appear-active-class="animated shake">
                <h2>"SHOUT OUR PASSION TOGETHER"</h2>    
            </transition>
                <a href="#">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            About
                        </h3>
                    </transition>
                </a>
                <a href="#">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            Story
                        </h3>
                    </transition>
                </a>
                <a href="#">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            F.A.Q
                        </h3>
                    </transition>
                </a><a href="#">
                    <transition appear appear-active-class="animated bounceInUp">
                        <h3>
                            Recruit
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

<style>
main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
main > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
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
}
h3 {
  display: inline-block;
}
main a:hover {
  color: gray;
}


</style>
