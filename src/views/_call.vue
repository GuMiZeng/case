<template>
  <div class="call">
      <div class="call_way">
          <img :src="require('./img/ic_phone.png')" alt="" srcset="">
          <p>免费电话</p>
          <div class="phone" :style="{backgroundImage:'url('+require('./img/call_bg.png')+')'}">
            <div class="phone_number">
              <img :src="require('./img/ic_location.png')" alt="" srcset="">
              <span>成都</span>
              <h1>155-2837-5293</h1>
            </div>
            <div class="phone_number">
              <img :src="require('./img/ic_location.png')" alt="" srcset="">
              <span>北京</span>
              <h1>137-1806-1705</h1>
            </div>            
          </div>
      </div>
      <!-- <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=975321148&site=qq&menu=yes">
       <div class="call_way">
          <img :src="require('./img/QQ.png')" alt="" srcset="">
          <p>在线咨询</p>
      </div>
      </a> -->
      <div class="call_way" @click="$router.push({path: '/agent_cooperation'})">
        <img :src="require('./img/ic.png')" alt="" srcset="">
        <p>申请代理</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.call {
  position: fixed;
  z-index: 999;
  top: 5.5rem;
  right: 0;
  .call_way {
    position: relative;
    width: 1.2rem;
    padding: .14rem 0;
    border-radius: .2rem;
    box-shadow: 0 0 .1rem #333;
    margin: .06rem;
    text-align: center;
    color: #fff;
    font-size: .18rem;
    background-color: #2199e1;
      // z-index: 999;
      p{
        margin: .2rem 0;
      }
    &:hover {
      .phone {
        width: 3.8rem;
        left: -3.8rem;
      }
    }
    .phone {
      position: absolute;
      overflow: hidden;
      width: 0;
      top: 0px;
      left: -.1rem;
      height: 1.5rem;
      // background: url(require("./img/call_bg.png")) no-repeat;
      // background: url("./img/call_bg.png");
      transition: all 1s;
      -moz-transition: all 1s; /* Firefox 4 */
      -webkit-transition: all 1s; /* Safari and Chrome */
      -o-transition: all 1s; /* Opera */
      .phone_number {
        margin: .3rem auto;
        width: 3.7rem;
      }
      h1 {
        font-size: .3rem;
        display: inline-block;
      }
    }
  }
}
</style>

