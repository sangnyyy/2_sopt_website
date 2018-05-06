<template>
  <main>
    <header>
      <img id="background_img" src="../../img/main_image.png" alt="">
      <router-link to="/">
          <h3>
            S O P T
          </h3>
      </router-link>
    </header>
    <article>
        <section class="title">
            <h1>About</h1>
        </section>
        <section class="content">
            <div class="img-content">
              <img class="part" src="../../img/design.png">
              <img class="part" src="../../img/develop.png">
              <img class="part" src="../../img/plan.png">
            </div>
            <div class="explain-content">
              <p>
                IT기술이 점점 발달하고 IT는 이미 우리의 삶에서 떼어내고 생각할 수 없을 만큼 깊숙히 존재하고 있습니다. 아침에 일어나는 순간부터 잠에 드는 그 순간까지 우리는 컴퓨터 앞에서 학습을 하고, 레포트를 작성하며, 핸드폰, PMP 등을 휴대하고 사용하며, 소셜네트워크서비스를 이용하여 서로의 안부를 묻고, 포털 사이트를 통하여 다양한 정보를 얻고, 검색엔진을 통해 필요한 정보를 얻습니다. 직접 오프라인매장에 방문할 필요없이 몇 번의 클릭으로 자신이 원하는 물건을 구입할 수도 있습니다. 이처럼 우리의 생활 곳곳에서 다양한 IT를 계속해서 접하고 있습니다.
              </p>
              <br><br>
              <p>
                사회는 점점 더 숙련된 IT인을 요구하는 반면에, 학문의 전당이라고 할 수 있는 대학에서는 그만큼 준비된 인재를 배출하지 못하고 있습니다. 다양한 개성과 관심을 가진 대학생들을 하나의 커리큘럼이라는 틀에 고정시켜 전형적인 주입식 교육을 통해 대학의 찍어내기식 인재배출을 하고 있기 때문입니다. 이와 더불어 우리 사회의 구조적인 문제 역시 대학생의 신분으로서 좀 더 IT에 가까이 접근할 수 있는 기회를 마련해주지 못하고 있으며, 오히려 기업들이 이러한 학생들의 요구를 알고 미래의 인재양성을 위해 이에 대한 서비스를 제공하고 있는 실정입니다. 이렇듯 숙련된, 경험있는 IT인을 양성하는 제도적 장치 역시 부족하다고 생각합니다.
              </p>
              <br><br>
              <p>
                심각한 취업난을 타개할 원동력은 크리에이티브(creative)라고 생각합니다. 대학생은 이러한 크리에이티브를 발휘하기에 가장 적합하며, 가장 잠재능력이 큰 존재라고 말할 수 있습니다. 사물을 보는 새로운 시각, 다양한 관점으로 IT를 재조명하며, 자신들이 어떠한 것을 필요로 하는지 느끼고, 이에 대해 준비하고, 학습하여, 이를 통해 발견된 크리에이티브를 통해 성공적인 벤처 창업을 위한 기틀을 마련할 것입니다.
              </p>
              <br><br>
              <p>
                이에 SOPT는 이러한 사회의 요구에 맞추어 준비된 예비 IT인을 육성하고, 대학생의 젊은 열정과 패기를 뽐내며, 도전에 대한 의욕을 고취시키고, 다양한 경험을 쌓을 수 있도록 돕습니다. 스터디와 내부 커리큘럼을 통해 자신의 실력을 향상시키며, 팀프로젝트를 진행함으로서 다양한 경험을 쌓고, 이를 기반으로 훌륭한 벤처기업을 창업, 육성할 수 있도록 준비를 합니다.
              </p>
              <br><br>
              <p>
                각각 기획, 개발, 디자인파트로 나뉘어 파트별로 스터디그룹을 결성하여 공통의 관심사를 추구하며, 함께 정보를 공유하고, 학습하며 자기계발을 통하여 이와 더불어 여러 공모전 응모는 물론 예비 심사대가 될 벤처창업을 위한 팀프로젝트를 진행할 예정입니다.
이러한 경험은 앞으로 벤처를 창업하는데 있어서 뿐만아니라 여러 방면에서 아주 큰 도움이 될 것이며, 자신에게 있어서도 또 한번의 도약의 기회가 되리라 생각합니다. 혼자서는 힘든 일이라도 뜻이 같은 사람들 여럿이 모이면 그 어떠한 일도 해낼 수 있습니다.
              </p>
              <br><br>
              <p>
                뿐만아니라 SOPT는 인맥네트워크의 장으로서 여러 대학의, 다양한 전공의 학생들이 모여 다양한 시각, 다양한 관점에서 사물을 바라볼 수 있도록 시야를 넓히며, 친목활동을 통해 보다 보람된 대학생활을 누리고자 합니다.
              </p>
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
  height: 180px;
}

.part{
    position: relative;
    width : 30%;
    height: auto;
    margin-top: 5%;
    
}
#background_img{
  position: absolute;
  top : 0;
  left : 0;
  width: 100%;
  height : 200%;
  z-index: -1;
}

.content{
  text-align: center;
}
div.explain-content{
  display: inline-block;
  margin-top : 5%;
  text-align: left;
  width: 70%;
  height: auto;
}

p{
  color:white;
  font-size: 130%;
}
main {
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
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
