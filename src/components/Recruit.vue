<template>
  <main>
    <header>
      <router-link to="/" id="home">
          <h3>
            S O P T
          </h3>
      </router-link>
    </header>
    <article>
        <section class="title">
            <h1>Recruit</h1>
        </section>
        <section class="content">
            <img id="inno_sopt_img" src="../../img/22nd_symbol.png">
            <div class="explain">
                <h2>제 22기 신입회원 모집 안내</h2>
                <h3>
                    
                    모집기간: 
                    
                    2018.2.25 월 - 2018.3.6 화
                </h3><br>
                <h3>
                    모집방법: 
                    모집기간 내에 공식 홈페이지 온라인 지원서<br>
                    서류지원 & 서류합격자대상 오프라인 면접
                </h3>
            </div>
        </section>
    </article>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
section.title{
  height: 15vh;
}

#inno_sopt_img{
    position: relative;
    width : 500px;
    margin-top: 5vh;
 
}
.content{
    height: 65vh;
    margin-top: 3vh;
}
.explain{
    margin-top:10vh;
    float: right;
    display: inline-block;
    width : 48vw;
    color: white;
    margin-right: 5vw;
}

.explain h2{
    font-size: 4.5rem;
}
.explain h3{
    text-align: center;
    font-size: 3rem;
}

main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
header {
    height:10vh;
}
#home{
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 5rem;
  display: inline;
  left: 3vw;
  float: left;
}
main h1 {
  color: white;
  font-size: 11rem;
  display: inline-block;
  height: 200px;
}

a:hover{
  color: gray;
  
}

@media (max-width:768px){
    
    section.title{
        height: 3vh;
    }
    #home{
     font-size: 3rem;
   }
    main h1{
      font-size: 6rem;
    }
    
    .explain h2{
    font-size: 2.5rem;
    }
    .explain h3{
        font-size: 1.5rem;
    }
}

@media (max-width:1024px){
    .explain{
        float: none;
        margin-right:0px;
    }
}
@media (max-width:414px){
    #inno_sopt_img{
        width: 300px;
    }
}

/* for iPhone5 */
@media (max-height:568px) and (max-width:320px){
  #home{
     font-size: 2rem;
   }
  header{
    height: 7vh;
  }
  main h1{
      font-size: 4rem;
    }
   .explain h2{
    font-size: 2.5rem;
    }
    .explain h3{
        font-size: 1rem;
    }
}
</style>
