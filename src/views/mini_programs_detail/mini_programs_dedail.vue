<template>
  <div class="mini_programs_detail">
    <call></call>
    <div class="ad">
      <img v-if="banner_icon" :src="BASE_IMG_URL + banner_icon" alt="" srcset="">
    </div>
    <div class="function">
        <div class="function_img">
          <img class="function_img_base" :src="require('./img/pic_proto.png')" alt="" srcset="">
          <img :class="{function_img1: key == 0,function_img2:key == 1}" v-for="(item,key) of itemImg" :src="item.img" alt="" srcset="">
        </div>
        <div class="icon_panel icon1">
          <img :src="require('./img/ic_phone.png')" alt="" srcset="">
          <p>移动支付</p>
        </div>
        <div class="icon_panel icon2">
          <img :src="require('./img/pic_car.png')" alt="" srcset="">
          <p>物流追踪</p>
        </div>
        <div class="icon_panel icon3">
          <img :src="require('./img/pic_set.png')" alt="" srcset="">
          <p>商品管理</p>
        </div>
        <div class="icon_panel icon4">
          <img :src="require('./img/pic_columnar.png')" alt="" srcset="">
          <p>营销支持</p>
        </div>
        <div class="icon_panel icon5">
          <img :src="require('./img/pic_money.png')" alt="" srcset="">
          <p>优惠积分</p>
        </div>
        <div class="icon_panel icon6">
          <img :src="require('./img/….png')" alt="" srcset="">
          <p>更多</p>
        </div>
    </div>
    <div class="ad_text">
      <h1>即时小程序</h1>
      <h2>移动电商版</h2>
      <p>全方位覆盖经营场景，快速搭建自己的网上商城，<br>
      从线上销售到物流配送支持，覆盖所有的电商行业</p>
      <div class="call">
        <span>联系电话：</span><h1 class="phone_number">137-1806-1705</h1><br>
        <div class="btn btn_bule" @click="$router.push({path: '/agent_cooperation'})">我要代理</div>
      </div>
    </div>
    <div class="special">
      <div class="special_box">
        <div class="special_first">
          <div class="special_top">
            <h1>特色一：自定义店铺风格</h1>
            <p>多种风格任您选择，覆盖各行各业，给您的用户有好的体验。</p>
          </div>
          <div class="special_first_content">
            <img :src="require('./img/pic_011.png')" alt="" srcset="">
          </div>
        </div>
        <div class="special_second">
          <div class="special_top">
            <h1>特色二：丰富有趣的营销工具</h1>
            <p>根据市场的特性转为小程序定制的各种有趣营销工具，让您的用户爱不释手！</p>
          </div>
          <div class="special_second_content">
            <div class="special_second_content_item" v-for="(item, key) of specialList" :key="key">
              <img :src="item.img" alt="" srcset="">
              <h1 class="text" v-text="item.text"></h1>
            </div>
          </div>
        </div>
        <div class="special_third">
          <div class="special_top">
            <h1>特色三：易上手的后台管理系统</h1>
            <p>精简功能、合理规划，初次接触也易上手，极大的帮助您管理商城</p>
          </div>
          <div class="special_third_content">
            <img :src="require('./img/mac.png')" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
    <div class="register" :style="{backgroundImage:'url('+require('./img/pic.png')+')'}">
      <h1>在线注册</h1>
      <p>注册后请耐心等待，工作人员将在24小时之内联系您</p>
      <div class="register_btn btn btn_bule">立即注册</div>
    </div>
  </div>
</template>

<script>
import call from '../_call'
import apiHome from "../../api/home.js";
export default {
  components:{
    call,
  },
  data() {
    return {
      banner_icon: 0,
      banner_link: null,
      // 当前小程序
      itemImg: [
        { img: require("./img/官网宣传/四海环宇01.png") },
        { img: require("./img/官网宣传/四海环宇02.png") }
      ],
      // 对应每个小程序的图片
      imgList: [
        [
          { img: require("./img/官网宣传/四海环宇01.png") },
          { img: require("./img/官网宣传/四海环宇02.png") }
        ],
        [
          { img: require("./img/餐饮外卖/功夫元01.png") },
          { img: require("./img/餐饮外卖/功夫元02.png") }
        ],
        [
          { img: require("./img/移动电商/小幸运01.png") },
          { img: require("./img/移动电商/小幸运02.png") }
        ],
        [
          { img: require("./img/线下020/梅林花艺01.png") },
          { img: require("./img/线下020/梅林花艺02.png") }
        ],
        [
          { img: require("./img/多门店连锁/创之梦01.png") },
          { img: require("./img/多门店连锁/创之梦02.png") }
        ],
        [
          { img: require("./img/餐饮外卖/新站点01.png") },
          { img: require("./img/餐饮外卖/新站点02.png") }
        ]
      ],
      specialList: [
        { img: require("./img/tag 13.png"), text: "推文系统" },
        { img: require("./img/tag 14.png"), text: "好友砍价" },
        { img: require("./img/tag 13.png"), text: "拼图" },
        { img: require("./img/tag 14.png"), text: "秒杀" },
        { img: require("./img/tag 13.png"), text: "送礼" },
        { img: require("./img/tag 14.png"), text: "晒单" },
        { img: require("./img/tag 13.png"), text: "复购" },
        { img: require("./img/tag 14.png"), text: "阶梯购物" },
        { img: require("./img/tag 13.png"), text: "积分商城" },
        { img: require("./img/tag 14.png"), text: "众筹预售" },
        { img: require("./img/tag 13.png"), text: "创意游戏" },
        { img: require("./img/tag 14.png"), text: "分享红包" },
        { img: require("./img/tag 13.png"), text: "人人拍卖" },
        { img: require("./img/tag 14.png"), text: "找人代付" }
      ]
    };
  },
  computed: {},
  methods: {
    getBanner() {
      apiHome.query.data.category = 3;
      apiHome.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.banner_icon = _response.data.data.list[0].icon;
        }
      });
    },
    getItemImg() {
      let id = sessionStorage.getItem("appID"); // => 返回testKey对应的值;
      this.itemImg = this.imgList[id];
    }
  },
  created() {
    this.getBanner();
    this.getItemImg();
  }
};
</script>

<style lang="scss" scoped>
.mini_programs_detail {
  color: #333;
  .ad {
    img {
      width: 100%;
    }
  }
  .function {
    position: relative;
    overflow: hidden;
    height: 4.8rem;
    padding: 0.3rem 0.6rem;
    // background-color: #f1f1f1;
    .function_img {
      position: relative;
      left: 42%;
      transform: translateX(-50%);
      text-align: center;
      z-index: 2;
      .function_img_base {
        position: absolute;
        width: 2.2rem;
        height: 4.33rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        // box-shadow: 0 0 .1rem #ccc;
      }
      .function_img1 {
        width: 1.84rem;
        height: 3.23rem;
        position: absolute;
        top: 0.54rem;
        left: 2.23rem;
        z-index: 2;
      }
      .function_img2 {
        width: 1.96rem;
        height: 3.5rem;
        position: absolute;
        top: 0.4rem;
        right: 0.8rem;
        z-index: -1;
      }
    }
    .icon_panel {
      position: absolute;
      font-size: 0.16rem;
      color: #666;
      text-align: center;
      p {
        margin: 0.05rem 0;
      }
    }
    .icon1 {
      top: 0.8rem;
      left: 0.8rem;
    }
    .icon2 {
      top: 2rem;
      left: 1rem;
    }
    .icon3 {
      top: 3.2rem;
      left: 0.6rem;
    }
    .icon4 {
      top: 0.8rem;
      right: 0.8rem;
    }
    .icon5 {
      top: 2rem;
      right: 0.4rem;
    }
    .icon6 {
      top: 3.2rem;
      right: 1rem;
    }
  }
  .ad_text {
    color: #999;
    font-size: 0.26rem;
    text-align: center;
    padding: 0.3rem 0;
    h1 {
      color: #333;
      font-size: 0.32rem;
      margin: 0.19rem 0;
    }
    h2 {
      color: #666;
      font-size: 0.28rem;
      font-weight: 500;
    }
    p {
      margin: 0.26rem 0;
      line-height: 1.8;
    }
    .call {
      span {
        color: #2199e1;
        font-size: 0.24rem;
        font-weight: 600;
      }

      .phone_number {
        display: inline-block;
        color: #2199e1;
        font-size: 0.34rem;
      }
      .btn {
        width: 2.4rem;
        height: 0.64rem;
        line-height: 0.64rem;
        font-size: 0.26rem;
        border-radius: 0.05rem;
      }
    }
  }
  .special {
    .special_box {
      text-align: center;
      color: #999;
      background-color: #f1f1f1;
      padding: 0.3rem 0;
      .special_top {
        padding: 0.3rem 0;
        h1 {
          color: #333;
          font-size: 0.32rem;
        }
        p {
          margin: 0.26rem auto;
          width: 3.95rem;
          line-height: 1.5;
          font-size: 0.26rem;
          word-wrap: break-word;
          word-break: normal;
        }
      }
      .special_second {
        p {
          width: 6rem;
        }
        .special_second_content_item {
          display: inline-block;
          vertical-align: top;
          margin: 0.27rem 0.1rem;
          text-align: center;
          .text {
            width: 0.48rem;
            margin: -0.7rem auto 0;
            font-size: 0.16rem;
            line-height: 1;
            color: #666;
          }
        }
      }
      .special_third {
        p {
          width: 5rem;
        }
      }
    }
  }
  .register {
    padding: 0.6rem 0;
    color: #fff;
    text-align: center;
    // background: url("./img/pic.png") no-repeat;
    background-size: cover;
    h1 {
      font-size: 0.38rem;
      letter-spacing: .08rem;
    }
    p {
      margin: .3rem 0 .5rem;
      font-size: 0.28rem;
      letter-spacing: .01rem;
    }
    .register_btn{
      width: 3.6rem;
      height: .7rem;
      line-height: .7rem;
      border-radius: .05rem;
      font-size: .32rem;
    }
  }
}
</style>

