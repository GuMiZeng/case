<template>
  <div class="activity_apecial">
    <call></call>
    <div class="ad">
        <img class="ad_bg" :src="require('./img/activity_special/lines.png')" alt="" srcset="">
        <img class="logo" :src="require('./img/activity_special/wind.png')" alt="" srcset="">
        <div class="logo_text"><h1>即时小程序对话会</h1></div> 
    </div>
    <div class="join">
        <div @click="toSignUp()" class="btn btn_bule">免费参会</div>
        <p>2018，对话峰会再次行动，全国各大城市火热行动中！</p>
    </div>

    <div class="center">
        <!-- 回顾 -->
        <div class="review">
            <div class="center_title review_title"><span>往届回顾</span></div>
            <div class="review_list">
                <div class="review_item" v-for="(item, key) of reviewList" :key="key">
                    <img :src="item.imgUrl" alt="" srcset="">
                </div>
            </div>
        </div>
        <!-- 覆盖 -->
        <div class="cover">
            <div class="center_title cover_title"><span>覆盖全国</span></div>
            <div class="cover_content">
                <img class="cover_bg" :src="require('./img/activity_special/map.png')" alt="" srcset="">
                <div class="cover_text">
                  <p>会议地点：<br> 北京、广州、成都</p>
                  <p>会议时间：<br> 2018年6月21日 上午10:00</p>
                  <p>会议地点：<br> 北京、广州、成都</p>
                  <ul>
                    <li><span>北京市朝阳区开的大酒店12F</span><span>010-86951475-247</span></li>
                    <li><span>上海市静安区巨鹿居32号</span><span>021-28425631</span></li>
                    <li><span>成都市到新区天府六街大酒店3F</span><span>028-85824712</span></li>
                  </ul>
                </div>
                <div class="phone">
                    <p>2018对话峰会  期待您的加入</p>
                    <div><span>热线：</span><h1 class="phone_number">137-1806-1705</h1></div>
                </div>
            </div>
        </div>
        <!-- 安排 -->
        <div class="plan">
          <div class="center_title plan_title"><span>议程安排</span></div>
          <div class="plan_list">
              <img class="plan_bg" :src="require('./img/activity_special/line.png')" alt="" srcset="">
              <ul>
                <li v-for="(item,key) of planList" :key="key">
                  <span v-text="item.time"></span><span v-text="item.address"></span>
                </li>
              </ul>
          </div>
        </div>
        <!-- 报名 -->
        <div ref="sign" class="sign_up">
            <div class="center_title sign_up_title"><span>报名参加</span></div>
            <p>扫码报名！钱100名可免费参会！</p>
            <div class="qr_code">
                <img :src="require('./img/activity_special/1527143050.png')" alt="" srcset="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { toRoll } from "../libs/function.js";
import call from './_call'
export default {
  components:{
    call
  },
  data() {
    return {
      reviewList: [
        {
          imgUrl: require("./img/activity_special/tu1.png")
        },
        {
          imgUrl: require("./img/activity_special/tu2.png")
        },
        {
          imgUrl: require("./img/activity_special/tu3.png")
        },
        {
          imgUrl: require("./img/activity_special/tu4.png")
        },
        {
          imgUrl: require("./img/activity_special/tu5.png")
        },
        {
          imgUrl: require("./img/activity_special/tu6.png")
        }
      ],
      addressList: [
        {
          address: "会议地点：北京，广州，成都",
          time: "会议时间：2018-06-20：10:00"
        },
        { address: "北京朝阳区大酒店12F", time: "010-86951475-247" },
        { address: "上海市静安区巨鹿居32号", time: "021-28425631" },
        { address: "成都市到新区天府六街大酒店3F", time: "028-85824712" }
      ],
      planList: [
        { time: "9:30签到", address: "酒店门口签到处" },
        { time: "11:00自由讨论", address: "酒店会议室" },
        { time: "14:00会议", address: "酒店会议室" },
        { time: "10:30会议开始", address: "酒店会议室" },
        { time: "12:00午餐", address: "酒店餐厅" },
        { time: "16:00茶歇", address: "酒店餐厅" }
      ]
    };
  },
  methods: {
    toSignUp() {
      let sign = this.$refs.sign;
      toRoll(sign);
    }
  }
};
</script>

<style lang="scss" scoped>
.activity_apecial {
  // filter:alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr=#06183B,endcolorstr=#014E6D,gradientType=0);
  // -ms-filter:alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr=#06183B,endcolorstr=#014E6D,gradientType=0);
  background: #06183b; /* 一些不支持背景渐变的浏览器 */
  background: -moz-linear-gradient(top, #06183b, #014e6d);
  background: -webkit-gradient(
    linear,
    0 0,
    0 bottom,
    from(#06183b),
    to(#014e6d)
  );
  .ad {
    position: relative;
    overflow: hidden;
    text-align: center;
    height: 3.6rem;
    color: #fff;
    .ad_bg {
      position: absolute;
      top: -1.2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .logo {
      position: absolute;
      top: 0.2rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .logo_text {
      width: 2.88rem;
      margin: 2.8rem auto 0;
      h1 {
        font-size: 0.4rem;
        font-weight: 300;
        letter-spacing: -0.05rem;
      }
    }
  }
  .join {
    text-align: center;
    .btn {
      width: 3.6rem;
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.32rem;
      border-radius: 0.05rem;
    }
    p {
      margin: 0.3rem 0 0 0;
      color: #2199e1;
      font-size: 0.26rem;
    }
  }
  .center {
    .center_title {
      margin: 0.6rem 0 0 0;
      text-align: center;
      color: #fefefe;
      font-size: 0.3rem;
      font-weight: 300;
      span {
        display: inline-block;
        width: 2.3rem;
        padding: 0 0 0.24rem 0;
        border-bottom: 0.02rem solid #2199e1;
      }
    }
    .review {
      .review_list {
        margin: 0 auto;
        padding: 0.4rem 0;
        .review_item {
          display: inline-block;
          margin: 0.15rem 0.2rem;
        }
      }
    }
    .cover {
      .cover_content {
        position: relative;
        margin: 0 auto;
        color: #fefefe;
        .cover_bg {
          position: absolute;
          right: 0;
        }
        .cover_text {
          padding: 0.5rem 0 0 0.5rem;
          font-size: 0.26rem;
          p {
            margin: 0.38rem 0;
            line-height: 1.4;
          }
          ul {
            margin: 0.78rem 0 0;
            li {
              margin: 0 0 0.3rem 0;
              font-size: 0.24rem;
              font-weight: 300;
              span {
                margin: 0 1rem 0 0;
              }
            }
          }
        }
        .phone {
          color: #2199e1;
          font-size: 0.2rem;
          text-align: center;
          margin: 0.68rem 0 0 0;
          .phone_number {
            display: inline-block;
            margin: 0.2rem 0 0 0;
            font-size: 0.4rem;
          }
        }
      }
    }
    .plan {
      padding: 0 1.5rem;
      .plan_list {
        position: relative;
        margin: 0.4rem auto 0;
        color: #fefefe;
        height: 3.8rem;
        .plan_bg {
          position: absolute;
        }
        ul {
          position: absolute;
          left: 0.76rem;
          li {
            margin: 0 0 0.38rem 0;
            font-size: 0.22rem;
            color: #fefefe;
            span {
              margin: 0 0.2rem 0;
            }
          }
        }
      }
    }
    .sign_up {
      text-align: center;
      padding: 0 0 0.5rem 0;
      p {
        padding: 0.4rem 0;
        font-size: 0.24rem;
        color: #fefefe;
        font-weight: 300;
        letter-spacing: 0.04rem;
        text-align: center;
      }
      .qr_code {
        margin: 0 auto;
        width: 2.83rem;
        height: 2.83rem;
        img {
          width: 2.83rem;
          height: 2.83rem;
        }
      }
    }
  }
}
</style>

