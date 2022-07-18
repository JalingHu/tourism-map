<template>
  <div class="project">
     <header class="header">
        <span class="back"> <em> < </em> 返回 </span>
        <span class="title">生态原乡 清新黔江</span>
      </header>
    <div class="head">
      <img src="./images/buy.jpg" alt="" />
      <p>
        黔江旅游
        <span class="left">AAAAA</span>
        <span class="right">图2</span>
      </p>
    </div>
    <div class="item1">
      <div class="span"><img src="./images/通知.png" alt="" /></div>
      全国防灾减灾日，带您"打卡"全国最具有特色的地方敬请期待
    </div>
    <div class="item2">
      <h2>基础信息</h2>
      <p>
        电话：123456-789
        <span>
          <img src="./images/电话.png" alt="" />
        </span>
      </p>
      <p>
        地址：重庆市黔江区
        <span>
          <img src="./images/签到-01.png" alt="" />
        </span>
      </p>
      <h2>景区公告</h2>
      <p>
        濯水蒲花暗河景区为封闭型景区，暂时开放
        <em>半程游览(船进船出游览模式)</em>
        ，且游客须前往濯水景区主游客中心购票乘生观光车前往，景区门票、观光车票执行五折门票优惠。
      </p>
    </div>

    <div class="item3">
      <h2>门票预订</h2>
      <div class="boxitem1">
        <p class="hd">
          濯水景区＋观光车
          <span>￥120起</span>
        </p>
        <p class="td">购票须知><span>立即预订</span></p>
      </div>
      <div class="boxitem2">
        <p class="hd">
          水车坪景区门票
          <span>￥120起</span>
        </p>
        <p class="td">购票须知><span>立即预订</span></p>
      </div>
      <div class="boxitem3">
        <p class="hd">
          神龟峡门西 示
          <span>￥120起</span>
        </p>
        <p class="td">
          购票须知>
          <span>立即预订</span>
        </p>
      </div>
      <div class="boxitem4 clear">
        <p class="hd">
          土家十三赛门票
          <span>￥120起</span>
        </p>
        <p class="td">
          购票须知>
          <span>立即预订</span>
        </p>
      </div>
    </div>
    <div class="footer">
      <router-link to="/home">
      <span class="left">
        <img src="./images/home-filling.png" alt="" />
       <p> 首页</p>
      </span>
      </router-link>
      <span class="right">
        <img src="./images/my_fill.png" alt="" />
        <p>我的</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.project {
  margin: 0 auto;
  width: 374px;
  // height: 1200px;
  background-color: #f4f4f4;
  .header {
  position: relative;
  width: 100%;
  height: 44px;
  font-size: 17px;
  text-align: center;
  line-height: 44px;
  background-color: #ffffff;
  .back {
    position: absolute;
    left: 5px;
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
  .head {
    position: relative;
    width: 100%;
    height: 170px;

    // background-image: url(../images/buy.jpg);
    // background-color: aquamarine;
    img {
      width: 100%;
      height: 100%;
    }

    p {
      position: absolute;
      bottom: 26px;
      margin-left: 15px;
      font-weight: 700;
      font-size: 16px;
      color: #fff;

      .left {
        display: inline-block;
        width: 65px;
        height: 25px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        line-height: 25px;
        background-color: #6ad239;
        border-radius: 5px;
      }

      .right {
        margin-left: 125px;
        display: inline-block;
        width: 60px;
        height: 28px;
        font-weight: 400;
        text-align: center;
        line-height: 28px;
        border: 1px solid #fff;
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.3);
      }
    }
  }

  .item1 {
    margin: 8px 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background-color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .span {
      margin-left: 8px;
      display: inline-block;
      vertical-align: middle;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

  .item2 {
    width: 100%;
    height: 240px;
    font-size: 14px;
    background-color: #fff;

    h2 {
      display: inline-block;
      margin: 15px 0 0 18px;
      font-size: 16px;
      font-weight: 700;
    }

    p {
      position: relative;
      margin: 10px;
      padding-left: 15px;
      color: #7d807f;

      span {
        position: absolute;
        display: inline-block;
        vertical-align: middle;
        right: 15px;

        img {
          width: 20px;
          height: 20px;
        }
      }

      em {
        color: red;
      }
    }
  }

  .item3 {
    width: 100%;
    // height: 448px;
    margin-top: 8px;
    background-color: #fff;

    h2 {
      display: inline-block;
      margin: 15px 0 0 18px;
      font-size: 16px;
      font-weight: 700;
    }

    .boxitem1,
    .boxitem2,
    .boxitem3,
    .boxitem4 {
      width: 100%;
      height: 75px;
      border-bottom: 1px solid #e2e2e2;

      .hd,
      .td {
        font-size: 14px;
        margin: 15px 18px;
      }

      .hd {
        position: relative;
        font-weight: 700;

        span {
          position: absolute;
          right: 0px;
          color: #ff4444;
          font-weight: 700;
        }
      }

      .td {
        position: relative;

        span {
          position: absolute;
          right: 0px;
          display: inline-block;
          color: #fff;
          width: 98px;
          height: 26px;
          text-align: center;
          line-height: 26px;
          background-color: #ff4444;
          border-radius: 5px;
        }
      }
    }
    .clear {
      border: 0;
    }
  }
  .footer {
    width: 100%;
    height: 65px;
    background-color: #fafafa;
    .left,
    .right {
        display: inline-block;
      img {
        width: 30px;
        height: 30px;
      }
      p {
          font-size: 14px;
      }
    }
    .left {
        color: #6bd044;
        margin: 8px 105px;
    }
  }
}
</style>