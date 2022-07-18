<template>
   <div class="project">
       <Header/>
        <main class="main">
            <div class="voice">
                <span class="left">
                    <img src="./images/voice (2).png" alt="">
                </span>
                正在播放黔江简介
                <span class="right">
                    <img src="./images/voice (1).png" alt="">
                </span>
            </div>
            <div class="play">
                   <span class="img"> <img src="./images/Snipaste_2022-05-11_10-48-30.png" alt=""></span>
                   黔江
                    <a href="./detail2.html">详情</a>
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
export default {

}
</script>
<style lang="less" scoped>
.project {
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
        .voice {
            margin: 12px 8px;
            width: 359px;
            height: 34px;
            padding-top: 10px;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.6);
            color: #fff;
            font-size: 14px;
            border: 1px solid rgba(187, 187, 187, 100);
            .left,.right {
                vertical-align: middle;
                width: 24px;
                height: 24px;
            }
            .left {
                margin: 10px 22px;
            }
            .right {
                margin: 10px 22px 10px 120px;
            }
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