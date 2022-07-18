<template>
  <div class="project">
    <Header />
    <div id="container" style="width: 100%; height: 724px"></div>
    <div class="footer">
      <span class="left">
        <span class="p1">濯水景区 </span><br>
        <span class="p2">重庆市黔江区包茂高速濯水互通入口处</span>
      </span>
      <span class="right">
        <img src="./images/map.png" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init(); 
  },
  methods: {
    init() {
      var map = new BMap.Map("container");
      var point = new BMap.Point(108.769786,29.313591);
      map.centerAndZoom(point, 15);
    },
  },
};
</script>

<style lang="less" scoped>
.project {
  margin: 0 auto;
  width: 375px;
  height: 724px;
  #container {
    height: 100%;
  }
  .footer {
      position: relative;
      height: 60px;
      width: 100%;
      background-color: #ffffff;
      .left {
          position: absolute;
          top: 10px;
          left: 10px;
          font-style: 16px;
              font-weight: 700;
          .p2 {
              font-weight: normal;
              font-size: 12px;
          }

      }
      .right {
          position: absolute;
          right:10px;
          top: 10px;
          img {
              height: 40px;
          width: 40px;
          }
      }
  }
}
</style>