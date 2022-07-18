<template>
  <div class="project">
    <Header />
    <div class="project">
      
      <main class="main">
        <section class="box">
          <div class="content">
            <div class="thead">
              <span class="span1">濯水古镇</span>
              <span class="span2">全景VR</span>
              <router-link to="/voice">
                <span class="span3">语音导览</span></router-link
              >
            </div>
            <div class="tbody">
              <div class="tbody1">“中国特色小镇” 、 “中国历史文化名镇”</div>
              <div class="tbody2">
                <span class="icon">
                  <img src="./images/md-stars@1x.png" alt="" />
                </span>
                国家AAAA级旅游景区
              </div>
              <div class="tbody3">
                <span class="icon">
                  <img src="./images/md-stars Copy@1x.png" alt="" />
                </span>
                重庆市黔江区风雨廊桥
               <router-link to="/map">
                <span class="icon1">
                  <img src="./images/md-local_play Copy@1x.png" alt="" />
                </span>
               </router-link>
              </div>
              <div class="tbody4">
                <span class="icon">
                  <img src="./images/md-date_range@1x.png" alt="" />
                </span>
                全年 全天开放
              </div>
              <p>建议游玩0.5-1天</p>
              <div class="tbody5">
                <span class="icon">
                  <img src="./images/md-phone_forwarded@1x.png" alt="" />
                </span>
                023-79468666
                <span class="icon1" @click="dialogVisible = true">
                  <img src="./images/fas fa-phone-square@1x.png" alt="" />
                </span>
                <!-- 电话信息框 -->
                <el-dialog
                  :visible.sync="dialogVisible"
                >
                  <span>确定拨打电话： 023-79468666 吗？</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button size="mini" @click="dialogVisible = false">取 消</el-button>
                    <el-button size="mini" type="primary" @click="dialogVisible = false"
                      >确 定</el-button
                    >
                  </span>
                </el-dialog>
              </div>
            </div>
          </div>
          <div class="text">
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

            <h3>四季皆宜购物推荐：</h3>
            　
            <p>
              　金包银饭、懒豆腐、大格蒸肉、烟熏腊肉、粑粑、豆瓣酱、罐罐茶。
            </p>

            <h3>到达方式：</h3>
            　
            <p>
              　乘车路线：重庆菜园坝长途汽车站、龙头寺汽车站均有车通黔江，黔江有三个汽车站，从东站乘坐2、3路车可以到达南站，这里有发往濯水古镇的班车，票价7元左右，滚动发车。
            </p>
            　　
            <p>
              自驾路线：内环快速/沪渝南线高速—包茂高速—灌水互通—厦成线—濯水古镇
            </p>
          </div>

          <router-link to="/buy">
            <div class="buy">购买门票</div>
          </router-link>
        </section>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>

<style lang="less" scoped>
.project {
  margin: 0 auto;
  width: 375px;
  // height: 800px;

  .main {
    position: relative;
    width: 375px;
    height: 1130px;
    background: url(./images/background.png) no-repeat;

    .box {
      position: absolute;
      top: 177px;
      width: 375px;
      // height: 1105px;
      background-color: #fff;
      border-radius: 10px 10px 0 0;

      .content {
        position: absolute;
        left: 15px;
        top: 7px;
        width: 345px;
        height: 271px;
        line-height: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 0px 4px 1px #bbbbbb;

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

          .tbody2 {
            margin-top: 10px;
            width: 100%;
            height: 45px;
            line-height: 45px;
            background-color: rgba(255, 245, 209, 100);
            color: rgba(153, 126, 85, 100);
            font-size: 14px;
            text-align: left;
            font-family: Arial;
            border: 1px solid rgba(255, 0, 0, 0);

            .icon {
              display: inline-block;
              vertical-align: middle;
              width: 24px;
              height: 24px;
            }
          }

          .tbody5,
          .tbody4,
          .tbody3 {
            margin-top: 12px;
            width: 100%;
            color: rgba(21, 21, 21, 100);
            font-size: 15px;
            text-align: left;

            .icon {
              display: inline-block;
              vertical-align: middle;
              width: 20px;
              height: 20px;
            }
          }

          .tbody3 {
            position: relative;

            .icon1 {
              position: absolute;
              right: 17px;
              width: 40px;
              height: 40px;
              line-height: 9px;
              background-color: #ff9800;
              text-align: center;
              border-radius: 20px;

              img {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 20px;
                height: 20px;
              }
            }
          }

          p {
            position: absolute;
            left: 28px;
            font-size: 12px;
          }

          .tbody5 {
            margin-top: 18px;
            position: relative;

            .icon1 {
              position: absolute;
              right: 17px;
              width: 40px;
              height: 40px;
            }
          }
        }
      }

      .text {
        margin: 299px 15px 0 15px;

        h3 {
          font-size: 16px;
        }

        p {
          font-size: 14px;
        }
      }

      .buy {
        position: absolute;
        left: 133px;
        top: 900px;
        width: 100px;
        height: 30px;
        background-color: #ee5c39;
        font-size: 14px;
        color: #fdf9f9;
        border-radius: 10px 10px 10px 10px;
        text-align: center;
        line-height: 30px;
        font-family: Microsoft Yahei;
        border: 1px solid rgba(187, 187, 100, 100);
      }
    }
  }

  .shade {
    // display: none;
    width: 100%;
    height: 727px;
    background-color: rgba(0, 0, 0, 0.3);

    .phone {
      width: 270px;
      height: 144px;
      text-align: center;
      border-radius: 13px 13px 13px 13px;
      background-color: rgba(255, 255, 255, 0.6);

      .hd {
        height: 98px;
        width: 100%;
        line-height: 98px;
      }
    }
  }
}
el-dialog {
  width: 270px;
  height: 144px;
}
</style>