<template>
  <div>
      <header class="header">
        <span class="back"  @click="goOff()"> <em> < </em> 返回 </span>
        <span class="title">生态原乡 清新黔江</span>
      </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goOff(){
            this.$router.go(-1);
        },
  }
};
</script>

<style lang="less" scoped>
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
</style>