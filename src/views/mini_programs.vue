<template>
  <div class="mini_programs">
    <!-- 二维码显示 -->
    <Modal v-model="d_qrCode" class-name="no_footer">
      <img v-if="d_qrCode" :src="BASE_IMG_URL + d_qrCodeIcon" alt="" srcset="">
    </Modal>
    <call></call>
    <div class="ad">
        <img v-if="banner_icon" :src="BASE_IMG_URL + banner_icon" alt="" srcset="">
    </div>
    <div class="classify">
        <div class="classify_box">
          <img class="more_icon" @click="d_more = !d_more" v-bind:class="{more_icon_active:d_more}" :src="require('./img/mini_programs/cart_more_icon.png')" alt="" srcset="">
            <ul v-bind:class="{more:d_more}">
                <li @click="chooseClassify(-1,-1)" v-bind:class="{active: d_classify_choose == -1}">全部</li>
                <li @click="chooseClassify(key, item.code)" class="pointer" v-bind:class="{active: key == d_classify_choose}" v-for="( item, key) of classifyList" :key="key" v-text="item.name"></li>
            </ul>
            <div class="classify_content">
              <div v-if="d_list.length == 0" class="classify_content_empty">
                <h1>暂无小程序...</h1>
              </div>
              <!-- <div v-else class="classify_content_item pointer" @mouseover="over(key)" @mouseout="d_hover = -1" v-for="(item,key) of d_list" :key="key"> -->
              <div v-else class="classify_content_item pointer" @click="showQrCode(item.qrCodeIcon)" v-for="(item,key) of d_list" :key="key">
                <!-- 点击，hover显示 -->
              <!-- <div v-if="d_hover == key">
                <div class="classify_content_item_img">
                    <img :src="BASE_IMG_URL + item.qrCodeIcon" alt="" srcset="">
                </div>
                <div class="classify_content_item_text">
                    <div class="agent pointer" @click="$router.push({path: '/agent_cooperation'})">代理</div>
                </div>
              </div> -->
              <!-- 默认显示 -->
                <div class="classify_content_item_img">
                    <img v-if="item.icon" :src="BASE_IMG_URL + item.icon" alt="" srcset="">
                </div>
                <div class="classify_content_item_text">
                    <div>
                      <!-- <p><span class="name" v-text="item.name"></span></p> -->
                      <!-- <p class="price"><span v-text="'￥'+item.price"></span></p> -->
                    </div>
                </div>

              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import call from "./_call";
import apiMini_programs from "../api/mini_programs.js";
import apiHome from "../api/home.js";
import apiDictionary from "../api/dictionary.js";
export default {
  components: {
    call
  },
  data() {
    return {
      d_qrCode:false,
      d_qrCodeIcon:0,
      d_more:false,
      d_total: 0,
      d_current: 1,
      d_size: 20,
      banner_icon: 0,
      d_type: null,
      d_hover: -1,
      d_classify_choose: -1,
      classifyList: [
        {
          code: "4000101",
          name: "电商"
        }
      ],
      d_list: [
        {
          id: "5043979917861800024",
          name: "测试2",
          type: "4000101",
          typeName: "电商",
          price: 11.0,
          userCount: 111,
          icon: "5856222877152854090",
          qrCodeIcon: "8700268163005501177"
        }
      ]
    };
  },
  methods: {
    showQrCode(_icon){
      this.d_qrCode = true
      this.d_qrCodeIcon = _icon
    },
    over(_key) {
      this.d_hover = _key;
    },
    out() {
      this.d_hover = -1;
    },
    chooseClassify(_key, _value) {
      this.d_classify_choose = _key; // 控制样式
      this.d_more = false //上下
      if (_value == -1) {
        this.d_type = null; // 传输code
      } else {
        this.d_type = _value; // 传输code
      }
      // 请求数据并填充
      this.getData();
    },
    changePage(_page) {
      console.log(_page), (this.d_current = _page);
      // apiMini_programs.query.data.pageIndex = _page
      //获取数据
      this.getData();
    },
    changePageSize(_pageSize) {
      console.log(_pageSize);
      this.d_size = _pageSize;
      // apiMini_programs.query.data.pageSize = _pageSize
      // 获取数据
      this.getData();
    },
    //头部图
    getBanner() {
      apiHome.query.data = {
        category: 3
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
      apiMini_programs.query.data = {
        type: this.d_type,
        pageIndex: this.d_current,
        pageSize: this.d_size
      };
      apiMini_programs.query.post().then(_response => {
        if (_response.data.code == 200) {
          // 查询成功
          this.d_total = _response.data.data.count;
          this.d_list = _response.data.data.list;
        }
      });
    },
    //获得行业
    getTrade() {
      apiDictionary.query.data.parentCode = 4000001;
      apiDictionary.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.classifyList = _response.data.data.list;
        }
      });
    }
  },
  created() {
    this.getTrade();
    this.getBanner();
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.no_footer{
  img{
    width: 100%;
    height: 100%;
  }
}
.mini_programs {
  color: #333;
  .ad {
    height: 2.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .classify {
    .classify_box {
      position: relative;
      margin: 0 auto;
      padding: 0.4rem 0 0 0;
      color: #333;
      .more_icon {
        position: absolute;
        top: .55rem;
        right: .26rem;
        transition:all 1s;
        z-index: 5;
        }
        .more_icon_active{
          transform: rotateX(180deg);
        }
        .more{
          height: 3rem;
        }
      ul {
        position: relative;
        width: 6.8rem;
        height: .6rem;
        overflow: hidden;
        transition: height 1s;
        // z-index: 5;
        &:hover{
          // height: 3rem;
        }
        li {
          float: left;
          margin: .05rem 0.16rem;
          width: 1rem;
          height: .4rem;
          line-height: .4rem;
          text-align: center;
          border: 1px solid transparent;
          font-size: 14px;
          font-weight: 600;
          &:hover {
            // border-bottom: 1px solid #2199e1;
            color: #2199e1;
          }
        }
        .active {
          // border-bottom: 1px solid #2199e1;
          color: #2199e1;
        }
      }
      .classify_content {
        margin: 0 auto;
        .classify_content_item {
          display: inline-block;
          vertical-align: top;
          width: 2rem;
          height: 3rem;
          margin: .4rem .24rem;
          .classify_content_item_img {
            width: 2rem;
            height: 2rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .classify_content_item_text {
            padding: .1rem 0;
            p {
              text-align: center;
              .name {
                font-size: 0.28rem;
              }
            }
            .agent {
              margin: .1rem auto;
              width: 2rem;
              height: .64rem;
              line-height: .64rem;
              border-radius: .04rem;
              text-align: center;
              color: #fff;
              background-color: #2199e1;
            }
            .price {
              padding: .1rem 0;
              text-align: center;
              font-size: .28rem;
              font-weight: 600;
              color: #a62e08;
            }
          }
        }
        .classify_content_empty{
          // padding: 1.8rem 0;
          height: 3.2rem;
          line-height: 3.2rem;
          text-align: center;
          font-size: .4rem;
          h1{
          font-weight: 500;
          }
        }
      }
      .page {
        // padding: 60px 0;
        text-align: right;
        ul {
          overflow: visible;
        }
        .ivu-page-total {
          color: #999;
        }
      }
    }
  }
}
</style>

