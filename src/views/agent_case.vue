<template>
  <div class="agent_case">
    <call></call>
    <div class="banner">
      <img v-if="banner_icon" :src="BASE_IMG_URL + banner_icon" alt="" srcset="">
    </div>
    <div class="agent_list">
        <div class="agent_content" v-for="(item, key) of agentList" :key="key">
          <div class="agent_box">
            <div class="agent_text">
              <h1 v-text="item.title"></h1>
              <p class="price"><span>销售额：</span><span class="price_num" v-text="item.salesAmount + '万'"></span></p>
              <p v-text="'团队人数：'+item.teamMember+'人'"></p>
              <p v-text="'代理时间：'+ item.agentDate"></p>
            </div>
            <div class="agent_img">
              <img :src="BASE_IMG_URL + item.icon" alt="" srcset="">
            </div>
          </div>
          <div class="agent_summary">
            <p v-text="item.content"></p>
          </div>
        </div>
    </div>
    <div class="group" :style="{backgroundImage:'url('+require('./img/agent_case/bg_pic2.png')+')'}">
      <div class="group_content">
        <h1>代理互动群</h1>
        <p>即时小程序的代理都在这里哦，大家可以
          互动，交流心得，并且可以共同商讨开发
          客户，也可以资源互通，互帮互助，完成
          共赢！内部技术的小伙伴也在群内，有问
          题也可以及时呼叫，加群后，申请成为代
          理，耐心等待哦！</p>
        <div class="group_btn">扫码入群</div>
      </div>
    </div>
    <div class="recruit">
      <img class="mask" :src="require('./img/agent_case/bg_pic.png')" alt="" srcset="">
      <div class="recruit_content">
        <h1>代理招募</h1>
        <div class="recruit_content_text">
          <p>全国范围内即时小程序代理商火热招募中。即刻代理，送50套完整小程序（各行业任你选择）！</p>
          <div class="recruit_btns">
            <a target="_blank" href="https://admin.yzsaas.cn/WeixinManager/index.jsp">
              <div class="btn btn_default">代理登录</div>
            </a>
            <div class="btn" @click="$router.push({path:'/agent_cooperation'})">申请代理</div>        
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import apiAgent from "../api/agentCase.js";
import apiHome from "../api/home.js";
import { convertUTC } from "../libs/function.js";
import call from './_call'
export default {
  components:{
    call
  },
  data() {
    return {
      banner_icon: 0,
      qrCode: false,
      agentList: []
    };
  },
  methods: {
    //头部图
    getBanner() {
      apiHome.query.data = {
        category: 6
      };
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 获取顶部轮播
          this.banner_icon = _response.data.data.list[0].icon;
        }
      });
    },
    //获得小程序列表
    getData() {
      apiAgent.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 查询成功
          for (let item of _response.data.data.list) {
            item.agentDate = convertUTC(item.agentDate);
          }
          this.agentList = _response.data.data.list;
        }
      });
    }
  },
  created() {
    this.getBanner();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.banner {
  height: 2.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.agent_list {
  padding: 0.3rem;
  .agent_content {
    overflow: hidden;
    height: 5.5rem;
    .agent_box {
      position: relative;
      overflow: hidden;
      margin: 0.3rem 0;
      .agent_text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 2.76rem;
        height: 2.8rem;
        padding: 0.22rem;
        z-index: 4;
        background-color: #d26060;
        color: #fff;
        h1 {
          font-size: 0.3rem;
          margin: 0 0 0.3rem 0;
        }
        p {
          font-size: 0.24rem;
          line-height: 1.5;
        }
      }
      .agent_img {
        float: right;
        width: 5rem;
        height: 3.2rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    &:nth-child(2n) {
      .agent_text {
        right: 0;
      }
      .agent_img {
        float: left;
      }
    }
    .agent_box_right {
      .agent_text {
        right: 0;
      }
      .agent_img {
        float: left;
      }
    }
    .agent_summary {
      position: absolute;
      width: 7rem;
      padding: 0.1rem 0;
      height: 1.6rem;
      color: #999;
      font-size: 0.26rem;
      word-wrap: break-word;
      white-space: pre-wrap;
    }
  }
}
.group {
  overflow: hidden;
  height: 5rem;
  // background: url("./img/agent_case/bg_pic2.png") no-repeat center center;
  background-size: cover;
  .group_content {
    float: right;
    margin: 0.36rem 0.3rem 0 0;
    width: 5.3rem;
    padding: 0.3rem;
    height: 4rem;
    color: #888;
    font-size: 0.26rem;
    background-color: rgba($color: #fff, $alpha: 0.8);
    h1 {
      margin: 0.2rem 0;
      font-size: 0.32rem;
      color: #666;
    }
    p {
      line-height: 1.5;
    }
    .group_btn {
      margin: 0.3rem 0 0 2rem;
      width: 2.6rem;
      height: 0.64rem;
      line-height: 0.64rem;
      text-align: center;
      border-radius: 0.05rem;
      background-color: #2199e1;
      color: #fff;
    }
  }
}
.recruit {
  overflow: hidden;
  position: relative;
  margin: 0.3rem 0 0 0;
  height: 3rem;
  .mask {
    width: 100%;
    position: absolute;
    z-index: -1;
  }
  .recruit_content {
    color: #fff;
    h1 {
      position: absolute;
      top: 0.74rem;
      left: 0.58rem;
      width: 1.5rem;
      font-size: 0.6rem;
      font-weight: 500;
      line-height: 1.5;
      letter-spacing: .1rem;
    }
    .recruit_content_text {
      position: absolute;
      top: 0.4rem;
      right: .1rem;
      p {
        width: 4.66rem;
        font-size: .28rem;
        line-height: 1.5;
        font-weight: 300;
        letter-spacing: .02rem;
      }
      .recruit_btns {
        .btn {
          width: 2rem;
          height: .64rem;
          margin: .4rem .4rem 0 0;
          line-height: .64rem;
          font-size: .26rem;
          color: #fff;
          background-color: #2199E1;
          border-radius: .05rem;
        }
        .btn_default{
          background-color: transparent;
          color: #2199E1;
          border: .01rem solid #2199E1;
        }
      }
    }
  }
}
</style>

