<template>
  <div class="home">
    <call></call>
  <div class="ad">
    <div class="banner">
        <div class="swiper-container">
            <div class="swiper-wrapper">          
                <div class="swiper-slide" v-for="str in listImg">
                    <img class="img" :src="BASE_IMG_URL + str.icon" alt="" srcset="" @click="$router.push({path: str.redirectUrl})">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
  </div>
    <div class="ad1">
      <ul>
        <li @click="toRoll(key)" class="pointer" v-for="(item, key) of ad1List" :key="key">
          <img :src="item.img" alt="" srcset="">
          <p v-text="item.text1"></p>
        </li>
      </ul>
    </div>
    <div class="type">
      <div class="type_content" ref="project" v-for="(item, key) of type_content" :key="key">
        <div class="type_text">
          <h1 v-text="item.title"></h1>
          <h1 v-text="item.subtitle"></h1>
          <p v-text="item.paragraph"></p>
        </div>
        <div class="type_img">
          <img :src="item.imgUrl" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class="case">
      <h1>优秀案例</h1>
      <div @click="toDetail(key)" class="case_content" v-for="(item, key) of case_content" :key="key">
        <img :src="item.imgUrl" alt="" srcset="">
        <!-- <p v-text="item.title"></p> -->
      </div>
    </div>
    <div class="cooperation">
      <h1>合作客户</h1>
      <div class="cooperation_img" v-for="(item, key) of cooperation_content" :key="key">
        <img :src="item.imgUrl" alt="" srcset="">
      </div>
    </div>
  <div class="agent_talk">
      <div class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">          
              <div class="swiper-slide" v-for="str in agentList">
    <div class="agent">
      <div class="agent_content">
        <div class="agent_img">
          <img :src="BASE_IMG_URL+str.icon" alt="" srcset="">
        </div>
        <h1 v-text="str.title"></h1>
        <p v-text="str.content"></p>
      </div>
    </div>
            </div>
          </div>
          <!-- <div class="agent_swiper_pagination"> -->
            <div class="swiper-pagination swiper-pagination-white"></div>
          <!-- </div> -->
      </div>
  </div>
  </div>
</template>

<script>
/* eslint-disable */
import call from "./_call";
import { toRoll } from "../libs/function.js";
import apiHome from "../api/home.js";
/* eslint-disable */
export default {
  components: {
    call
  },
  data() {
    return {
      listImg: [],
      agentList: [],
      ad1List: [
        {
          img: require("./img/home/icon1.png"),
          text1: "官网宣传",
          text2: "Official Network"
        },
        {
          img: require("./img/home/icon2.png"),
          text1: "多门店连锁",
          text2: "Chain Store"
        },
        {
          img: require("./img/home/icon3.png"),
          text1: "移动电商",
          text2: "Mobile E-commerce"
        },
        {
          img: require("./img/home/icon4.png"),
          text1: "线下O2O",
          text2: "Online to Offline"
        },
        {
          img: require("./img/home/icon5.png"),
          text1: "餐饮外卖",
          text2: "catering&take-out"
        }
      ],
      type_content: [
        {
          title: "官网宣传",
          subtitle: "Official Network",
          paragraph:
            "多种高端大气上档次的官网小程序，任客户选择，简约而不简单。",
          imgUrl: require("./img/home/pic_01.png")
        },
        {
          title: "多门店连锁",
          subtitle: "Chain Store",
          paragraph: "连锁商超、线下分销、同城平台。",
          imgUrl: require("./img/home/pic_02.png")
        },
        {
          title: " 移动电商",
          subtitle: "Mobile E-commerce",
          paragraph: "商城管理，智能营销，移动支付。",
          imgUrl: require("./img/home/pic_03.png")
        },
        {
          title: "线下O2O",
          subtitle: "Online To Offline",
          paragraph: "LBS到店，线下预约，营销推广。",
          imgUrl: require("./img/home/pic_04.png")
        },
        {
          title: "餐饮外卖",
          subtitle: "catering&take-out",
          paragraph: "配送管理，线上线下下单，订单管理。",
          imgUrl: require("./img/home/pic_04.png")
        }
      ],
      case_content: [
        { title: "四海环宇", imgUrl: require("./img/home/logo.png") },
        { title: "功夫元", imgUrl: require("./img/home/logo1.png") },
        { title: "小幸运", imgUrl: require("./img/home/logo2.png") },
        { title: "梅林花艺", imgUrl: require("./img/home/logo3.png") },
        { title: "创之梦", imgUrl: require("./img/home/logo4.png") },
        { title: "新站点", imgUrl: require("./img/home/logo5.png") }
      ],
      cooperation_content: [
        { imgUrl: require("./img/home/pic_06.png") },
        { imgUrl: require("./img/home/pic_07.png") },
        { imgUrl: require("./img/home/pic_08.png") },
        { imgUrl: require("./img/home/pic_09.png") },
        { imgUrl: require("./img/home/pic_10.png") },
        { imgUrl: require("./img/home/pic_11.png") },
        { imgUrl: require("./img/home/pic_12.png") },
        { imgUrl: require("./img/home/pic_13.png") },
        { imgUrl: require("./img/home/pic_14.png") }
      ]
    };
  },
  methods: {
    toRoll(_key) {
      // toRoll(this.$refs.project[_key]);
    },
    toDetail(_value) {
      // 存储id 凭借id切换图片
      sessionStorage.setItem("appID", _value); // 存入一个值
      this.$router.push({ path: "/mini_programs_detail" });
    },
    getBannerSilder() {
      apiHome.query.data = {
        category: 1
      };
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 获取顶部轮播
          this.listImg = _response.data.data.list;
          let swiper = new Swiper(".swiper-container", {
            pagination: {
              el: ".swiper-pagination"
            },
            loop: true,
            grabCursor: false,
            speed: 300,
            autoplay: {
              delay: 3000
            },
            autoplayDisableOnInteraction: false,
            initialSlide: 0,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            onTouchEnd: function() {
              swiper.startAutoplay();
            }
          });
        }
      });
    },
    getAgentSilder() {
      apiHome.query.data = {
        category: 2
      };
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 获取顶部轮播
          this.agentList = _response.data.data.list;
          this.$nextTick(function() {
            var swiper = new Swiper(".swiper-container", {
              pagination: {
                el: ".swiper-pagination"
              },
              loop: true,
              grabCursor: false,
              speed: 300,
              autoplay: {
                delay: 3000
              },
              onTouchEnd: function() {
                swiper.startAutoplay();
              }
            });
          });
        }
      });
    }
  },
  mounted() {
    this.getBannerSilder();
    this.getAgentSilder();
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0 0 0.5rem 0;
  .ad {
    height: 2.5rem;
    .banner {
      .swiper-container {
        width: 100%;
        height: 2.5rem;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 100%;
          height: 100%;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .swiper-pagination-bullet {
          width: 0.12rem;
          height: 0.12rem;
          margin: 0 0.2rem;
          display: inline-block;
          background-color: #fff;
        }
      }
    }
  }
  .ad1 {
    padding: 0.4rem 0;
    ul {
      margin: 0 auto;
      overflow: hidden;
      li {
        float: left;
        width: 1.4rem;
        margin: 0 0.04rem;
        text-align: center;
        img {
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 0 0.3rem 0;
        }
        p {
          line-height: 1.5;
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
  }
  .type {
    color: #fff;
    font-size: 0.16rem;
    .type_content {
      overflow: hidden;
      background: #a2c59d;
      .type_text {
        float: left;
        width: 4rem;
        height: 2.5rem;
        padding: 0.2rem 0 0.5rem 0.3rem;
        h1 {
          font-size: 0.34rem;
          font-weight: 300;
          margin: 0.05rem 0.2rem;
        }
        p {
          margin: 0.2rem 0;
          line-height: 1.5;
        }
      }
      .type_img {
        float: right;
        width: 3.2rem;
        img {
          width: 3.2rem;
          height: 2.5rem;
        }
      }
      &:nth-child(2) {
        background: #f1cb79;
      }
      &:nth-child(3) {
        background: #7cb4cd;
      }
      &:nth-child(4) {
        background: #f7a37a;
      }
      &:nth-child(5) {
        background: #c490bf;
      }
      &:nth-child(2n) {
        .type_text {
          float: right;
        }
        .type_img {
          float: left;
        }
      }
    }
  }
  .case {
    background-color: #f1f1f1;
    padding: 0.2rem 0;
    text-align: center;
    h1 {
      margin: 0.1rem 0;
      font-size: 0.32rem;
      // font-weight: 500;
      color: #2e3442;
    }
    .case_content {
      display: inline-block;
      width: 2rem;
      // height: 2.1rem;
      margin: 0.16rem 0.24rem;
      padding: 0.1rem;
      background-color: #fff;
      box-shadow: 0 0 8px #ccc;
      img {
        width: 1.12rem;
        height: 1.12rem;
        margin: 0.2rem 0;
      }
    }
  }
  .cooperation {
    text-align: center;
    border-bottom: 1px solid #ccc;
    h1 {
      padding: 0.3rem 0;
    }
    .cooperation_img {
      overflow: hidden;
      width: 33%;
      display: inline-block;
    }
  }
  .agent {
    padding: 0.5rem 0 0;
    .agent_content {
      position: relative;
      left: 50%;
      margin-left: -3.3rem;
      width: 6.6rem;
      height: 7rem;
      background-color: #f1f1f1;
      box-shadow: 0 0 8px rgba(0, 0, 1, 0.15);
      img {
        position: absolute;
        top: -0.2rem;
        left: -0.2rem;
        width: 5rem;
        height: 3.4rem;
        box-shadow: 0 0 8px rgba(0, 0, 1, 0.15);
      }
      h1 {
        position: absolute;
        top: 0.5rem;
        right: 0.7rem;
        width: 0.3rem;
        font-size: 0.28rem;
        color: #666;
      }
      p {
        position: absolute;
        bottom: 0.4rem;
        padding: 0.2rem;
        line-height: 1.2;
        color: #666;
      }
    }
  }
  .agent_talk {
    .swiper-container {
      width: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
      }
      .swiper-slide {
        width: 100%;
        height: 100%;
        .agent {
          padding: 0.5rem 0 0 0;
          .agent_content {
            position: relative;
            left: 50%;
            margin-left: -3.3rem;
            width: 6.6rem;
            height: 8.4rem;
            background-color: #f1f1f1;
            box-shadow: 0 0 8px rgba(0, 0, 1, 0.15);
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 5rem;
              height: 5rem;
              box-shadow: 0 0 8px rgba(0, 0, 1, 0.15);
            }
            h1 {
              position: absolute;
              top: 0.5rem;
              right: 0.7rem;
              width: 0.3rem;
              font-size: 0.28rem;
              color: #666;
            }
            p {
              position: absolute;
              bottom: 0;
              width: 6rem;
              height: 3.6rem;
              padding: 0.4rem 0.2rem;
              line-height: 1.2;
              font-size: .32rem;
              color: #666;
              word-wrap: break-word;
            }
          }
        }
      }
      .agent_swiper_pagination {
        position: absolute;
        z-index: 7;
        bottom: 0.45rem;
        right: 0.6rem;
        width: 1.56rem;
        height: 0.15rem;
        .swiper-pagination-bullet {
          width: 0.12rem;
          height: 0.12rem;
          margin: 0 0.2rem;
          display: inline-block;
          background-color: #fff;
        }
      }
    }
  }
}
</style>

