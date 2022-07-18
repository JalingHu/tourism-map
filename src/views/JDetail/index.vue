<template>
  <div class="project">
    <Header />
    <main class="main">
      <section class="box">
        <div class="content">
          <div class="thead">
            <span class="span1">中国 黔江</span>
            <span class="span2">手绘地图</span>
            <router-link to="/voice"
              ><span class="span3">语音导览</span></router-link
            >
          </div>
          <div class="tbody">
            <div class="tbody1">
              “生态原乡 清新黔江” 、“神秘芭拉胡 魅力阿蓬江”
            </div>
          </div>
        </div>
        <div class="video">
          <!-- <img src="./images/JDetail (1).png" alt="" /> -->
          <video src="@/static/v.mp4" controls width="300"></video>
        </div>
        <div class="text" >
          <h3>景区简介：</h3>
          　
          <p>
            　重庆黔江濯水古镇曾是渝东南地区最富盛名的古镇之一，也是巴人进退兴衰、秦人金戈铁马的见证者。作为重庆旧城老街的典型，濯水古镇街巷格局保留较为完整，具有浓郁的渝东南古镇格局，既体现了与其他城市历史街区的差异，也承载着巴文化、土家文化与汉文化的融合、传承与创新，同时码头文化、商贾文化、场镇文化相互交织，丰富多彩的文化艺术遗存更是独特，是感受老重庆魅力的不二之选。景点分布：
          </p>
          <p>
            　　濯水古镇位于重庆以东的黔江区濯水镇境内，距黔江主城26公里。濯水古镇以老街为主线，青石板铺就，长约1000米，街道两旁有商号、民居、会馆、学堂等建筑以及一块道德碑，入口处有一座古戏台，下街沿河保留有完整的土家吊脚楼群，美丽的阿蓬江上还有一座亚洲最长的风雨廊桥。
          </p>
          <h3>旅游攻略：</h3>
          <p>
            　　濯水的土家摸秋节是古镇的节日民俗之一，中秋举办，家家户户吃糍粑、送糍粑，进行糍粑盛宴和土家摸秋活动。
          </p>
          <div class="card">
            <div class="item1">
              <img src="./images/JDetail (3).png" alt="" />
              <h3 class="h3">急速过山车</h3>
              <p class="p">尖叫时刻，瞬间冲刺的感官快感给你无...</p>
            </div>
            <div class="item2">
              <img src="./images/JDetail (4).png" alt="" />
              <h3 class="h3">摩天轮</h3>
              <p class="p">超大摩天轮，体验温文浪漫的至高一刻...</p>
            </div>
          </div>
          <h3 class="recom">四季皆宜购物推荐：</h3>
          　
          <p>　金包银饭、懒豆腐、大格蒸肉、烟熏腊肉、粑粑、豆瓣酱、罐罐茶。</p>
          <img src="./images/JDetail (2).png" alt="" />

          <h3>到达方式：</h3>
          　
          <p>
            　乘车路线：重庆菜园坝长途汽车站、龙头寺汽车站均有车通黔江，黔江有三个汽车站，从东站乘坐2、3路车可以到达南站，这里有发往濯水古镇的班车，票价7元左右，滚动发车。
          </p>
          　　
          <p>
            自驾路线：内环快速/沪渝南线高速—包茂高速—灌水互通—厦成线—濯水古镇
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.project {
  margin: 0 auto;
  width: 375px;
  height: 1410px;
  .main {
    position: relative;
    width: 375px;
    height: 100%;
    background: url(./images/background.png) no-repeat;
    .box {
      position: absolute;
      top: 177px;
      width: 375px;
      // height: 1105px;
      background-color: #fff;
      border-radius: 10px 10px 0 0;

      .content {
        // position: absolute;
        margin: 7px 0 0 15px;
        // left: 15px;
        // top: 7px;
        width: 345px;
        height: 100px;
        line-height: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 0px 3px 0px #bbbbbb;
        border: 1px solid rgba(255, 0, 0, 0);

        .thead {
          margin-top: 22px;
          width: 315px;
          height: 35px;

          .span1 {
            font-size: 24px;
            font-weight: 700;
            color: #3b3b3b;
          }

          .span2,
          .span3 {
            float: right;
            margin-left: 8px;
            display: inline-block;
            width: 80px;
            height: 30px;
            font-size: 14px;
            text-align: center;
            line-height: 30px;
            border: 1px solid #bbbbbb;
            border-radius: 10px 10px 10px 10px;
          }
        }

        .tbody {
          position: relative;
          margin-left: 16px;
          width: 315px;

          .tbody1 {
            width: 314px;
            height: 19px;
            color: rgba(0, 134, 246, 100);
            font-size: 13px;
            text-align: left;
          }
        }
      }
      .video {
        margin: 10px 0 0 40px;
        width: 300px;
        height: 179px;
      }

      .text {
        margin: 0 23px;
        // margin-top: 299px;
        h3 {
          font-weight: 700;
          font-size: 16px;
        }
        p {
          font-weight: 400;
          font-size: 13px;
        }
        .card {
          // position: relative;
          width: 100%;
          height: 180px;
          .h3 {
            text-align: left;
            font-weight: 400;
            font-size: 13px;
            color: #3d4655;
            text-align: center;
          }

          .p {
            font-weight: 400;
            font-size: 12px;
            text-align: left;
            color: #999999;
          }

          .item1,
          .item2 {
            // position: absolute;
            width: 150px;
            height: 168px;
            img {
              width: 100%;
              height: 99px;
            }
          }
          .item1 {
            float: left;
          }
          .item2 {
            float: right;
          }
        }
        .recom {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>