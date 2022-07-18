<template>
  <div class="project">
   <Header/>
    <main class="main">
            <div class="list">  
                <router-link to="voice"><img src="./images/home (3).png" alt=""></router-link>
                <router-link to="/card"><img src="./images/home (2).png" alt=""></router-link>
               <router-link to="/route"><img src="./images/home (1).png" alt=""></router-link>
              
            </div>  
            <div class="tiger">
                <img src="./images/home (4).png" alt="">
            </div>
            <router-link to="/wdetails"><div class="Wdetails">
                濯水古镇
            </div></router-link>
            <div class="play">
                   <span class="img"> <img src="./images/Snipaste_2022-05-11_10-48-30.png" alt=""></span>
                   黔江
                    <router-link to="/jdetail">详情</router-link>
                    <span class="yunxing">
                        <img src="./images/运行.png" alt="">
                    </span>
            </div>
            <div class="bottom"></div>
        </main>  
        <audio src="@/static/m.mp3" autoplay></audio>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.project{
    margin: 0 auto;
    width: 375px;
    height: 800px;
    .main {
        display: flex;
        position: relative;
        width: 100%;
        height: 724px;    
        background: url(./images/background.png) no-repeat;
        height: 724px;

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
            right: 2px ;
        }
        .Wdetails {
            position: absolute;
            top: 485px;
            left: 180px;
            width: 120px;
            height: 20px;
            line-height: 25px;
            text-align: center;
            font-size: 14px;
            background-color: #fff;
            border-radius: 10px;
        }
        .play {
            position: absolute;
            left: 2px;
            top: 650px; 
            width: 370px;
            height: 60px;
            background-color: #fff;
            border-radius: 8px;
            font-weight: 700;    
            .img {
                vertical-align: middle;
                img {
                    margin: 10px;
                    width: 40px;
                    height: 40px;
                }
            }
            a {
                font-weight: 400;
                font-size: 12px;
                color: #5ca3d3;
                margin: 0 60px;
            }
            .yunxing {
                position: absolute;
                right: 40px;
                top: 15px;
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        .bottom {
            position: absolute;
            right: 121px;
            bottom: 8px;
            display: inline-block;
            width: 134px;
            height: 5px;
            background-color: #999999;
            border-radius: 50px;
        }
    }

}
</style>