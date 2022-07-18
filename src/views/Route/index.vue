<template>
  <div class="project">
    <Header />
    <div class="main">
      <div class="shade">
        <div class="list">
         <router-link to="voice"><img src="./images/home (3).png" alt=""></router-link>
          <router-link to="/card"
            ><img src="./images/home (2).png" alt=""
          /></router-link>
          <router-link to="/route"
            ><img src="./images/home (1).png" alt=""
          /></router-link>
        </div>
        <div class="glance">
          <router-link to="/route3">
            <h3>云上夏都 洗肺之旅</h3>
            <p>景点4个 游览时长3小时</p></router-link
          >
          <router-link to="/route2">
            <h3>峡谷峡江 探幽之旅</h3>
            <p>景点7个 游览时长3小时</p></router-link
          >
          <router-link to="/route1">
            <h3>生态原乡 文化之旅</h3>
            <p class="last">景点4个 游览时长8小时</p></router-link
          >
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
  // height: 727px;

  .main {
    position: relative;
    width: 100%;
    height: 727px;
    background: url(./images/background.png) no-repeat;
    .shade {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
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

      .glance {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 256px;
        background-color: #fff;
        border-radius: 5px 5px 0 0;
        h3 {
          font-size: 18px;
          text-align: left;
          margin: 20px 0 0 24px;
          font-weight: 400;
          color: #101010;
        }

        p {
          padding: 10px 0 12px 24px;
          font-size: 14px;
          border-bottom: 1px solid #dddddd;
        }
        .last {
          border: 0;
        }
      }
    }
  }
}
</style>