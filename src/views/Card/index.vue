<template>
  <div class="project">
      <header class="header">
            <span class="back"> <em> < </em> 返回 </span>
           <span class="title">黔江 明信片</span>
        </header>
    <div class="main">
      <img src="./images/card (4).png" v-if="status === 0" />
      <img src="./images/card (1).png" v-if="status === 1" />
      <img src="./images/card (2).png" v-if="status === 2" />
      <img src="./images/card (3).png" v-if="status === 3" />
    </div>
    <div class="nav">
      <div
        class="item1"
        v-for="(item, index) in mess"
        v-on:click="changeImg(index)"
      >
        <img :src="item.content" />
        <div class="shade" v-show="status === index"></div>
        <p>{{ item.name }}</p>
      </div>
    </div>
   <Footer/>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      status: 0, //状态显示
      mess: [
        {
          id: 0,
          content: require("./images/cardmin (5).png"),
          name: "风雨廊桥",
        },
        { id: 1, content: require("./images/cardmin (4).png"), name: "芭拉胡" },
        {
          id: 2,
          content: require("./images/cardmin (1).png"),
          name: "云上水市",
        },
        { id: 3, content: require("./images/cardmin (2).png"), name: "小南海" },
      ],
    };
  },
  methods: {
    changeImg: function (index) {
      this.status = index;
    },
  },
};
</script>
<style lang="less" scoped>
.project {
  width: 375px;
  height: 724px;
  margin: 0 auto;
  .header {   
        position: relative;   
        width: 100%;
        height: 44px;
        font-size: 17px;
        text-align: center;
        line-height: 44px;
        background-color: #FFFFFF;
        .back {
            position: absolute;
            left: 8px;
            margin-left: 8px;
            font-family: PingFangSC-regular;
            font-weight: 400;
            em {
             font-weight: 700;
            }
        }
        .title {
            font-weight: 700;
        }
    }
  .main {
    margin: 0 20px;
    width: 335px;
    height: 528px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .nav {
    width: 100%;
    background-color: #fff;
    align-items: center;
    .item1,
    .item2,
    .item3,
    .item4 {
      position: relative;
      float: left;
      margin: 40px 3px;
      width: 75px;
      height: 75px;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        margin-left: 15px;
        color: #ee5c39;
        font-size: 14px;
      }
      .shade {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        // url(./images/background.png)
        background: url(./images/cardmin3.png);
      }
      .active {
        display: block;
      }
    }
    .item1 {
      margin-left: 12px;
    }
  }
  
}
</style>