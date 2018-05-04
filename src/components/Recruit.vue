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
            <h1>Recruit</h1>
        </section>
        <section class="content">
            <img id="inno_sopt_img" src="../../img/22nd_symbol.png">
            <div class="explain">
                <h2>제 22기 신입회원 모집 안내</h2>
                <br>
                <h3>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    모집기간 
                    &nbsp;&nbsp;&nbsp;
                    2018.2.25 월 - 2018.3.6 화 (지원서 제출기간)
                </h3>
                <h3>
                    모집방법 &nbsp;&nbsp;&nbsp;
                    모집기간 내에 공식 홈페이지 온라인 지원서<br/>
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

#inno_sopt_img{
    float: left;
    position: relative;
    width : 500px;
    height: auto;
    margin-top: 5%;
    left : 10%;
}
.content{
    height: auto;
    max-height: 500px;
}
.explain{
    float: right;
    margin-right: 3%;
    margin-top: 6%;
    display: inline-block;
    /* border : 1px solid black; */
    width : 50%;
    height: auto;
    color: white;
}

.explain h2{
    font-size: 50px;
}
.explain h3{
    text-align: center;
    font-size: 30px;
}

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
  left: 3%;
  float: left;
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
a:hover{
  color: gray;
  
}

</style>
