<template>
<div class="agent_talk">
    <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">          
            <div class="swiper-slide" v-for="str in agentList">
                <img  style="width: 500px;" :src="BASE_IMG_URL+str.icon" alt="" srcset="" @click="$router.push({path: str.path})">
                <div class="text" style="width: 700px;">
                    <h1 v-text="str.title"></h1>
                    <h2 v-text="str.subTitle"></h2>
                    <p v-text="str.content"></p>
                </div>
            </div>
            
        </div>
        <div class="agent_swiper_pagination">
          <div class="swiper-pagination swiper-pagination-white"></div>
        </div>
    </div>
</div>

</template>

<script>
import apiHome from "../api/home.js";
export default {
  // props: ["agentList"],
  data() {
    return {
      // agentList: [{},{},{}]
      agentList: []
    };
  },
  methods: {
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
              grabCursor:false,
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
    this.getAgentSilder();
  }
};
</script>

<style lang="scss">
.agent_talk {
  .swiper-container {
    width: 100%;
    height: 500px;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      width: 100%;
      height: 100%;
      display: flex;
      img {
        width: 500px;
        height: 100%;
        flex-basis: 500px;
      }
      .text {
        flex-basis: 700px;
        padding: 60px 70px 0 50px;
        color: #fff;
        font-size: 16px;
        background-color: #2e3442;
        h1 {
          font-size: 22px;
        }
        h2 {
          font-weight: 500;
          margin: 20px 0;
        }
        p {
          padding: 60px 0 0 30px;
          line-height: 2;
          font-weight: 300;
          word-wrap: break-word;
        }
      }
    }
    .agent_swiper_pagination {
      position: absolute;
      z-index: 7;
      bottom: 15px;
      right: 60px;
      width: 156px;
      height: 15px;
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        margin: 0 12px;
        display: inline-block;
        background-color: #fff;
      }
    }
  }
}
</style>