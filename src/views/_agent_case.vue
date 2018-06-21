<template>
	<div class="carousel-containner">
            <div class="wrap">
            <div class="content poster-item" v-for="(item, key) of d_list" :key="key"  :style="cssList[key]" v-touch:swipeleft="pre" v-touch:swiperight="next">
                <div class="bkImg">
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
                    <a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=975321148&version=1&src_type=web&web_src=oicqzone.com">
                      <div class="more">更多咨询客服</div>
                    </a>
                    <!-- <a target="_blank" href="http://sighttp.qq.com/msgrd?v=1&uin=975321148">
                        <div class="more">更多咨询客服</div>
                    </a> -->
                </div>
            </div>
        </div>
		<!-- <ul class="wrap">
			<li class="poster-item"  v-for="(bk,index) in d_list" :style="cssList[index]" v-touch:swipeleft="pre" v-touch:swiperight="next">
				<div class="bkImg"><img :src="bk.image"></div>
				<div class="bkName"><span>《{{bk.goodsName}}》</span></div>
			</li>
		</ul> -->
		<!-- <div class="bkDes">
			<p>{{goodDes}}</p>
		</div> -->
	</div>
</template>

<script>
import apiAgentPlan from "../api/agentPlan.js"; // 代理方案获取
export default {
  props: {
    scal: {
      type: Number,
      default: 0.8
    },
    width: {
      type: Number,
      default: 4.3
    },
    height: {
      type: Number,
      default: 4.56
    },
    containerWidth: {
      type: Number,
      default: 5.42
    },
    fontSize: {
      type: Number,
      default: 0.14
    }
  },
  directives: {
    touch: {
      bind: function(el, binding, vnode) {
        var touchType = binding.arg; //传入的模式 press swipeRight swipeLeft swipeTop swipeDowm Tap
        var timeOutEvent = 0;
        var direction = "";
        //滑动处理
        var startX, startY;
        //返回角度
        function GetSlideAngle(dx, dy) {
          return Math.atan2(dy, dx) * 180 / Math.PI;
        }
        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
        function GetSlideDirection(startX, startY, endX, endY) {
          var dy = startY - endY;
          var dx = endX - startX;
          var result = 0;
          //如果滑动距离太短
          if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
            return result;
          }
          var angle = GetSlideAngle(dx, dy);
          if (angle >= -45 && angle < 45) {
            result = "swiperight";
          } else if (angle >= 45 && angle < 135) {
            result = "swipeup";
          } else if (angle >= -135 && angle < -45) {
            result = "swipedown";
          } else if (
            (angle >= 135 && angle <= 180) ||
            (angle >= -180 && angle < -135)
          ) {
            result = "swipeleft";
          }
          return result;
        }
        el.addEventListener(
          "touchstart",
          function(ev) {
            startX = ev.touches[0].pageX;
            startY = ev.touches[0].pageY;
            //判断长按
            timeOutEvent = setTimeout(() => {
              timeOutEvent = 0;
              if (touchType === "press") {
                binding.value();
              }
            }, 500);
          },
          false
        );
        el.addEventListener("touchmove", function(ev) {
          clearTimeout(timeOutEvent);
          timeOutEvent = 0;
        });
        el.addEventListener(
          "touchend",
          function(ev) {
            var endX, endY;
            endX = ev.changedTouches[0].pageX;
            endY = ev.changedTouches[0].pageY;
            direction = GetSlideDirection(startX, startY, endX, endY);
            clearTimeout(timeOutEvent);
            switch (direction) {
              case 0:
                break;
              case "swipeup":
                if (touchType === "swipeup") {
                  binding.value();
                }
                break;
              case "swipedown":
                if (touchType === "swipedown") {
                  binding.value();
                }
                break;
              case "swipeleft":
                if (touchType === "swipeleft") {
                  binding.value();
                }
                break;
              case "swiperight":
                if (touchType === "swiperight") {
                  binding.value();
                }
                break;
              default:
            }
          },
          false
        );
      }
    }
  },
  data() {
    return {
      d_list: [
        {
          id: "393744555897407184",
          title: "测试",
          agentPrice: "45",
          agentReference: "3333",
          feature: "333",
          reason: "333",
          icon: "2456563444425117367",
          isTop: 0,
          orderNo: 1,
          status: 1,
          createDate: "2018-05-31T17:45:46.634+0800"
        },
        {
          id: "393744555897407184",
          title: "测试",
          agentPrice: "45",
          agentReference: "3333",
          feature: "333",
          reason: "333",
          icon: "2456563444425117367",
          isTop: 0,
          orderNo: 1,
          status: 1,
          createDate: "2018-05-31T17:45:46.634+0800"
        },
        {
          id: "393744555897407184",
          title: "测试",
          agentPrice: "45",
          agentReference: "3333",
          feature: "333",
          reason: "333",
          icon: "2456563444425117367",
          isTop: 0,
          orderNo: 1,
          status: 1,
          createDate: "2018-05-31T17:45:46.634+0800"
        }
      ],
      num: 0,
      cssList: [],
      currentIndex: 0,
      goodDes: "",
      index: 0
    };
  },
  created() {
    this.getData();
    this.init();
    this.setDefault();
  },
  methods: {
            //代理方案
    getData() {
      apiAgentPlan.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.d_list = _response.data.data.list;
        }
      });
    },
    init() {
      let len = this.d_list.length;
      if (len % 2 == 0) {
        this.d_list.copyWithin(len - 1, 0, 1);
      }
      this.num = this.d_list.length;
      this.goodDes = this.d_list[this.index].goodDes;
      console.log(this.d_list);
    },
    setDefault() {
      let obj = {
        zIndex: Math.floor(this.num / 2),
        width: this.width + "rem",
        height: this.height + "rem",
        left: (this.containerWidth - this.width) / 2 + "rem",////////////////////////
        fontSize: this.fontSize + "rem"
      };
      this.cssList.push(obj);
      var level = Math.floor(this.num / 2);
      var gap = (this.containerWidth - this.width) / 2 / level;
      var firstLeft = (this.containerWidth - this.width) / 2 + this.width;
      var scalNow = this.scal;
      //右边位置
      for (let i = 1; i < this.num / 2; i++) {
        level--;
        console.log(level);
        var w = this.width * scalNow;
        var h = this.height * scalNow;
        var lf = firstLeft + i * gap - w;
        var fs = this.fontSize * scalNow;
        var css = {
          zIndex: level,
          width: w + "rem",
          height: h + "rem",
          left: lf + "rem",
          top: (this.height - h) / 2 + "rem",
          fontSize: fs + "rem"
        };
        this.cssList.push(css);
        scalNow *= this.scal;
      }
      //左边位置
      for (let i = 1; i < this.num / 2; i++) {
        scalNow /= this.scal;
        var w = this.width * scalNow;
        var h = this.height * scalNow;
        var lf = (i - 1) * gap;
        var fs = this.fontSize * scalNow;
        var css = {
          zIndex: level,
          width: w + "rem",
          height: h + "rem",
          left: lf + "rem",
          top: (this.height - h) / 2 + "rem",
          fontSize: fs + "rem"
        };
        this.cssList.push(css);
        level++;
      }
    },
    next() {
      this.index = ++this.index % this.num;
      console.log("right");
      var pre = this.cssList.shift();
      this.cssList.push(pre);
      this.goodDes = this.d_list[this.index].goodDes;
    },
    pre() {
      this.index = (--this.index + this.num) % this.num;
      console.log("left");
      var next = this.cssList.pop();
      this.cssList.unshift(next);
    }
  }
};
</script>

<style lang="scss">
.carousel-containner {
  margin: 0 auto;
  .wrap {
    // width: 2.7rem;
    // height: 2.46rem;
    left: 50%;
    transform: translateX(-50%);
    // margin-left: -1.35rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    .poster-item {
      transform: translateZ(0);
      // width: 1.61rem;
      height: 100%;
      font-size: 0.16rem;
      position: absolute;
      left: 0;
      top: 0;
      // background: #fff;
      transition: all 0.5s;
      .bkImg {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        background-color: #f1f1f1; //
        text-align: center;
         .content_top {
          margin: 0.1rem 0;
          h1,
          p {
            margin: 0.2rem 0.1rem 0;
            display: inline-block;
          }
          h1 {
            color: #333;
            font-size: 0.26rem;
          }
          p {
            font-size: 0.16rem;
            span {
              color: #a62e08;
              font-size: 0.26rem;
            }
          }
          img {
            width: 1.16rem;
            height: 1.34rem;
            position: relative;
            z-index: 1;
          }
        }
        .content_detail {
          width: 3rem;
          margin: 0.3rem auto;
          color: #666;
          ul li {
            text-align: left;
            margin: 0.14rem 0;
            font-size: 0.2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .more {
          margin: 0 auto;
          width: 2rem;
          height: 0.5rem;
          line-height: 0.5rem;
          color: #fff;
          font-size: 0.2rem;
          background-color: #2199e1;
          border-radius: 0.05rem;
        }
      }
    }
  }
}
</style>