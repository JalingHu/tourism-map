<template>
<div class="project">
  <Header />
  <div class="main">
     <div class="list">
          <router-link to="voice"><img src="./images/home (3).png" alt=""></router-link>
          <router-link to="/card"
            ><img src="./images/home (2).png" alt=""
          /></router-link>
          <router-link to="/route"
            ><img src="./images/home (1).png" alt=""
          /></router-link>
        </div>
    <div class="tiger">
      <img src="./images/home (4).png" alt="" />
    </div>
    <div class="message">
      <h2>云上夏都 洗肺之旅</h2>
      <p>景点4个 游览时长3小时</p>
      <div class="num">
        <em>01</em>
        <span>......</span>
        <em>02</em> <span>......</span> <em>03</em> <span>......</span>
        <em>04</em>
      </div>
      <div class="place">
        <a href="#" class="first">濯水古镇</a>
        <a href="#">小南海</a>
        <a href="#">西普陀寺</a>
        <a href="#">教堂</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.project {
    margin: 0 auto;
    width: 375px;
    .main {
  position: relative;
  margin: 0 auto;
  width: 375px;
  height: 742px;
  background: url(./images/routes3.png);
  .list {
    position: absolute;
    display: flex;
    top: 24px;
    right: 8px;
    flex-direction: column;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .tiger {
    position: absolute;
    top: 482px;
    right: 2px;
  }
  .message {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    h2 {
      margin: 11px 9px;
      font-size: 18px;
      text-align: left;
      font-weight: 400;
    }

    p {
      margin: 10px 9px;
      font-size: 14px;
      text-align: left;
    }

    .num {
      position: relative;
      margin: 0 9px;
      width: 375px;
      height: 48px;

      em {
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid #a98e62;
        border-radius: 16px;
        text-align: center;
        line-height: 30px;
      }
      span {
        width: 30px;
        height: 20px;
        line-height: 30px;
      }
    }

    .place {
      margin: 0 9px;
      font-size: 14px;
      text-align: left;
      a {
        padding: 0 5px;
      }
      .first {
        padding-left: 0;
      }
    }
  }
}
    }

</style>