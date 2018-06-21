<template>
  <div class="activity">
    <call></call>
    <div class="banner">
        <img v-if="banner_icon" :src="BASE_IMG_URL + banner_icon" alt="" srcset="">
    </div>
    <div class="agent_case">
      <agent-case class="silder"></agent-case>
    </div>
    <div class="why">
      <h1>为什么要加入我们</h1>
      <img class="why_bg" :src="require('./img/activity/list_03.png')" alt="" srcset="">
    </div>
    <!-- <div class="center">
        <div class="center_content">
            <div class="content" v-for="(item, key) of d_list" :key="key">
                <div class="content_top">
                    <div class="img">
                        <img :src="BASE_IMG_URL + item.icon" width="167" height="192" alt="" srcset="">
                    </div>
                    <h1 v-text="item.title"></h1>
                    <p><small>价格：</small><span v-text="item.agentPrice"></span></p>
                </div>
                <div class="content_detail">
                    <ul>
                      <li v-text="'推荐代理：' + item.agentReference"></li>
                      <li v-text="'推荐原因：' + item.reason"></li>
                      <li v-text="'特点：' + item.feature"></li>
                    </ul>
                </div>
                <a target="_blank" href="http://sighttp.qq.com/msgrd?v=1&uin=975321148">
                    <div class="more">更多咨询客服</div>
                </a>
            </div>
        </div>
    </div> -->
  </div>
</template>

<script>
import apiHome from "../api/home.js";
import call from './_call'
import agentCase from './_agent_case'
export default {
  components:{
    agentCase,
    call
  },
  data() {
    return {
      banner_icon: 0,
    };
  },
  methods: {
    //头部图
    getBanner() {
      apiHome.query.data = {
        category: 4
      };
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 获取顶部轮播
          this.banner_icon = _response.data.data.list[0].icon;
        }
      });
    },

  },
  created() {
    this.getBanner();
  }
};
</script>

<style lang="scss" scoped>
.banner {
  box-sizing: border-box;
  height: 2.5rem;
  text-align: center;
  color: #fff;
  img {
    width: 100%;
    height: 100%;
  }
}
.agent_case{
  padding: .4rem 1rem;
  height: 5.4rem;
}
  .why {
    color: #fff;
    height: 7rem;
    position: relative;
    text-align: center;
    img{
      width: 100%;
      height: 100%;
    }
    h1{
      position: absolute;
      top: .4rem;
      left: 50%;
      transform: translateX(-50%);
      font-weight: 500;
      letter-spacing: 0.05rem;
    }
  }
</style>

