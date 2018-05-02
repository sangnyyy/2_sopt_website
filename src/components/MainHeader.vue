<template>
    <main>
        <img src="../../img/main_image.png">
        <transition appear appear-active-class="animated shake">
            <h1>SOPT</h1>
        </transition>
        <br/>
        
        <transition>
            <h2>SHOUT OUR PASSION TOGETHER</h2>    
        </transition>
        <br>
        
        
        <transition appear appear-active-class="animated bounceInDown">
            <a href="#">About</a>
        </transition>
        <transition appear appear-active-class="animated bounceInDown">
            <a href="#">Story</a>
        </transition>
        <transition appear appear-active-class="animated bounceInDown">
            <a href="#">F.A.Q</a>
        </transition>
        <transition appear appear-active-class="animated bounceInDown">
            <a href="#">Recruit</a>
        </transition>
    </main>
</template>

<script>
export default {
    data : function(){
        return {
            show : true
        }
    }
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
main h1 {
  margin-top: 10%;
  color : white;
  position: relative;
  top : 20%;
  /* transform: translateY(-50%); */
  font-size: 200px;
  display: inline-block;
  
}
main h2{
    
    
    color:white;
    font-size:50px;
    
}
main a{
    top:15%;
    position: relative;
    color:white;
    text-decoration: none;
    font-size:40px;
    margin-right: 3%;
}
</style>
