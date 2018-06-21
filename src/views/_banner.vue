<template>
  <div class="banner">
    <h1>测试</h1>
      <div class="swiper-container">
          <div class="swiper-wrapper">          
              <div class="swiper-slide" v-for="str in listImg">
                  <img class="img" :src="BASE_IMG_URL + str.icon" alt="" srcset="" @click="$router.push({path: str.redirectUrl})">
              </div>
          </div>
          <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import apiHome from "../api/home.js";

export default {
  data() {
    return {
      listImg: []
    };
  },
  methods: {
    getAgentSilder() {
      apiHome.query.data = {
        category: 1
      };
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 获取顶部轮播
          this.listImg = _response.data.data.list;
          let swiper = new Swiper(".swiper-container", {
            pagination: {
              el: ".swiper-pagination",
            },
            loop: true,
            grabCursor: false,
            speed: 300,
            autoplay: {
              delay: 3000,
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
    }
  },
  created() {
    this.getAgentSilder();
  }
};
</script>

<style lang="scss">
.banner {
  .swiper-container {
    width: 100%;
    height: 400px;
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
      width: 12px;
      height: 12px;
      margin: 0 20px;
      display: inline-block;
      background-color: #fff;
    }
  }
}
</style>