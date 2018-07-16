<template>
  <div class="agent_cooperation">
    <call></call>
    <div class="banner">
      <img class="banner_img" :src="require('./img/agent_cooperation/banner.png')" alt="" srcset="">
      <div class="banner_mask"></div>
      <div class="banner_box">
        <h1>即时应用小程序</h1>
        <h2>全国限量招募代理</h2>
        <div class="phone">
            <h1>137-1806-1705</h1>
        </div>
        <div class="banner_btns">
            <!-- <a target="_blank" href="mqqwpa://im/chat?chat_type=wpa&uin=975321148&version=1&src_type=web&web_src=oicqzone.com"> -->
            <!-- <a target="_blank" href="http://sighttp.qq.com/msgrd?v=1&uin=975321148"> -->
              <!-- <div class="pointer btn">在线咨询</div> -->
            <!-- </a> -->
            <div class="pointer btn" @click="rollApply()">立刻申请</div>              
        </div>
      </div>
    </div>
    <div class="good_at">
      <h1 class="good_at_top"> 四大产品优势</h1>
      <div class="good_at_content">
        <div class="good_at_img">
          <video controls autoplay>
            <source src="//imdtcx.com/media/hardware-conn-video.mp4" type="video/mp4">
          </video>
        </div>
        <div class="good_at_text">
            <img class="text_icon" :src="require('./img/agent_cooperation/arrow.png')" alt="" srcset="">
            <h1 class="text_title">硬件链接</h1>
            <div class="text_content">
              <p> 一部手机链接所有硬件，</p>
              <p>一个小程序搞定全部功能 </p>
            </div>
        </div>
      </div>
      <div class="good_at_content right_good_at">
        <div class="good_at_img">
          <img class="right_text_icon" :src="require('./img/agent_cooperation/yinliu.jpg')" alt="" srcset="">
        </div>
        <div class="good_at_text">
            <img class="right_icon" :src="require('./img/agent_cooperation/arrow.png')" alt="" srcset="">
            <h1 class="text_title">强行引流</h1>
            <div class="text_content">
              <p> 10亿微信粉丝沉淀，</p>
              <p>爆发社交引流至线上， </p>
              <p>帮助商家精准营销。</p>
            </div>
        </div>
      </div>
      <div class="good_at_content">
        <div class="good_at_img">
          <img class="left_text_icon" :src="require('./img/agent_cooperation/live.jpg')" alt="" srcset="">
        </div>
        <div class="good_at_text">
            <img class="text_icon" :src="require('./img/agent_cooperation/arrow.png')" alt="" srcset="">
            <h1 class="text_title">直播功能</h1>
            <div class="text_content">
              <p> 全行业模版无缝搭载，</p>
              <p>主播互动锁住更多流量 </p>
            </div>
        </div>
      </div>
      <div class="good_at_content right_good_at">
        <div class="good_at_img">
          <img class="right_text_icon" :src="require('./img/agent_cooperation/SSAAS.jpg')" alt="" srcset="">
        </div>
        <div class="good_at_text">
            <img class="right_icon" :src="require('./img/agent_cooperation/arrow.png')" alt="" srcset="">
            <h1 class="text_title">SAAS系统</h1>
            <div class="text_content">
              <p> 管理模块整合，多样</p>
              <p>营销应用，优化营销 </p>
              <p>成本，提升营业收入</p>
            </div>
        </div>
      </div>
    </div>
    <div class="merit" :style="{backgroundImage:'url('+require('./img/agent_cooperation/bg_pic.png')+')'}">
      <div class="merit_mask"></div>
        <h1 class="merit_top">代理五大优势</h1>
        <div class="merit_content" v-for="(item, key) of meritList" :key="key">
            <div class="merit_img">
                <img v-bind:src="item.img" alt="" srcset="">
            </div>
            <div class="merit_text">
                <p v-text="item.text1"></p>
                <p v-text="item.text2"></p>
            </div>
        </div>
    </div>
    <div class="promise">
      <h1 class="promise_top">无忧合作 四大承诺</h1>
      <div class="promise_content" v-for="(item, key) of promiseList" :key="key">
          <div class="promise_content_title">
              <img :src="item.img" alt="" srcset="">
              <h1 v-text="item.title"></h1>
          </div>
          <ul>
              <li v-for="(i, key) of item.children" :key="key" v-text="i"></li>
          </ul>
      </div>
    </div>
    <div class="cover" :style="{backgroundImage:'url('+require('./img/agent_cooperation/banner.png')+')'}">
        <div class="cover_box">
            <h1 class="cover_top">适合商户 覆盖行业</h1>
            <div class="cover_content" v-for="(item, key) of coverList" :key="key">
                    <img v-bind:src="item.img" alt="" srcset="">
                    <p v-text="item.text"></p>
            </div>
        </div>
    </div>
    <!-- 注册表单 -->
      <div ref="applyForm" class="apply">
          <h1 class="apply_top">加入我们 申请代理</h1>
          <div class="apply_content">
              <Form class="apply_form" ref="apply_form"  :rules="apply_form_check" :model="apply_form">
                  <FormItem prop="manager" label="姓名">
                      <Input v-model="apply_form.manager" placeholder="请输入您的姓名" maxlength="10"></Input>
                  </FormItem>
                  <FormItem label="手机"><br>
                    <Row>
                      <!-- <Col span="10"> -->
                      <FormItem prop="mobile">
                        <Input v-model="apply_form.mobile" placeholder="请输入您的手机号码" maxlength="11" ></Input>
                      </FormItem>
                      <!-- </Col> -->
                      <!-- <Col span="7" offset="1">
                        <FormItem prop="smsCode">
                          <Input v-model="apply_form.smsCode" placeholder="请输入验证码" maxlength="4"></Input>
                        </FormItem>
                      </Col>
                      <Col span="5"  offset="1">
                        <div class="send_btn form_btn" v-if="d_send" v-text="d_count + '秒后重试..'">发送中...</div>   
                        <div class="send_btn form_btn" v-else @click="sendMessage()">发送验证码</div>                         
                      </Col> -->
                    </Row>
                  </FormItem>
                  <FormItem prop="corporation" label="公司">
                      <Input v-model="apply_form.corporation" placeholder="请输入您的公司名称" maxlength="30"></Input>
                  </FormItem>
                  <FormItem label="地址"><br>
                    <Row>
                      <Col span="7">
                        <FormItem :prop="province">
                          <Select @on-change="getCity($event)" v-model="apply_form.province" placeholder="省">
                            <Option v-for="(item, key) of provinceList" :key="key"
                            :value="item.code" v-text="item.name"></Option>
                          </Select>
                        </FormItem>
                      </Col>
                      <Col span="7" offset="1">
                        <FormItem prop="city">
                          <Select @on-change="getArea($event)" v-model="apply_form.city" placeholder="市" >
                            <Option v-for="(item, key) of cityList" :key="key"
                            :value="item.code" v-text="item.name"></Option>
                          </Select>
                        </FormItem>
                      </Col>
                      <Col span="8"  offset="1">
                        <FormItem prop="region">
                          <Select v-model="apply_form.region" placeholder="区">
                            <Option v-for="(item, key) of areaList" :key="key"
                            :value="item.code" v-text="item.name"></Option>
                          </Select>
                        </FormItem>
                      </Col>
                        </Row>
                  </FormItem>
                  <FormItem prop="remark" label="备注">
                      <Input v-model="apply_form.remark" type="textarea" :autosize="{minRows: 4,maxRows: 4}"  maxlength="200" placeholder="请描述公司基本情况及对当地市场的分析（200字以内）"></Input>
                      <p>申请后请耐心等待，工作人员会在24小时内联系您</p>
                  </FormItem>
                  
                  <FormItem>
                      <div class="apply_btn form_btn" @click="toApply()">提交</div>
                  </FormItem>
              </Form>
          </div>
      </div>
  </div>
</template>

<script>
import { toRoll } from "../libs/function.js";
import call from './_call'
import apiAgent from "../api/agentSign.js";
import apiDictionary from "../api/dictionary.js";
export default {
  components:{
    call
  },
  data() {
    return {
      d_send: false,
      d_count: "120",
      provinceList: [],
      cityList: [],
      areaList: [],
      apply_form: {
        manager: "", //	String	不是	负责人
        mobile: "", //	String	是	手机号码
        // smsCode: "", //	String	是	短信验证码
        corporation: "", //	String	不是	公司名称
        province: "", //	String	不是	省份
        city: "", //	String	不是	城市
        region: "", //	String	不是	地区
        remark: "", //	String	不是	备注
        typeFlag: 100 //Integer	是	验证类型:100-注册用户;200-找回密码;300-其他验证
      },
      // 表单验证
      apply_form_check: {
        manager: [
          {
            trigger: "change",
            // required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("姓名不能为空"));
              }
              return callback();
            }
          }
        ],
        mobile: [
          {
            trigger: "change",
            required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("手机号不能为空"));
              }
              // 检查格式
              if (!/^1[34578]{1}\d{9}$/.test(value)) {
                return callback(new Error("输入正确手机号码"));
              }
              return callback();
            }
          }
        ],
        // smsCode: [
        //   {
        //     trigger: "change",
        //     required: true,
        //     validator: (rule, value, callback) => {
        //       // 禁止空
        //       if (!value) {
        //         return callback(new Error("验证码不能为空"));
        //       }
        //       //  // 检查格式
        //       // if (!/^[0-9]\d{4}$/.test(value)) {
        //       //   return callback(new Error("输入数字验证码"));
        //       // }
        //       return callback();
        //     }
        //   }
        // ],
        corporation: [
          {
            trigger: "change",
            // required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("公司名称不能为空"));
              }
              return callback();
            }
          }
        ],
        province: [
          {
            trigger: "change",
            required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("省份不能为空"));
              }
              return callback();
            }
          }
        ],
        city: [
          {
            trigger: "change",
            required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("市级不能为空"));
              }
              return callback();
            }
          }
        ],
        region: [
          {
            trigger: "change",
            required: true,
            validator: (rule, value, callback) => {
              // 禁止空
              if (!value) {
                return callback(new Error("区不能为空"));
              }
              return callback();
            }
          }
        ]
      },
      promiseList: [
        {
          img: require("./img/agent_cooperation/ic_price.png"),
          title: "代理拿货全网最低价",
          children: ["价格最低", "利润超高", "大量赠送"]
        },
        {
          img: require("./img/agent_cooperation/ic_tool.png"),
          title: "全程技术支持",
          children: ["技术团队强大", "随时随地提供服务", "永久程序维护"]
        },
        {
          img: require("./img/agent_cooperation/ic_sale.png"),
          title: "售后支持",
          children: ["完成签约后续工作", "只要您签约", "客户问题解答"]
        },
        {
          img: require("./img/agent_cooperation/ic_learn.png"),
          title: "定期培训",
          children: ["有质量的培训内容", "根据代理需求提供培训方案", "合作共赢"]
        }
      ],
      meritList: [
        {
          img: require("./img/agent_cooperation//pic_yuan.png"),
          text1: "源代码支持",
        },
        {
          img: require("./img/agent_cooperation/pic_du.png"),
          text1: "区域独家保护",
          // text2: "先到先得"
        },
        {
          img: require("./img/agent_cooperation/pic_hui.png"),
          text1: "价格优惠",
          text2: ""
        },
        {
          img: require("./img/agent_cooperation/pic_pei.png"),
          text1: "专业运营解",
          text2: "决方案"
        },
        {
          img: require("./img/agent_cooperation/pic_xu.png"),
          text1: "后续代",
          text2: "运营分成"
        },
        // {
        //   img: require("./img/agent_cooperation/核.png"),
        //   text1: "上市公司",
        //   text2: "核心项目"
        // }
      ],
      coverList: [
        { img: require("./img/agent_cooperation/饮食.png"), text: "饮食服务" },
        { img: require("./img/agent_cooperation/美容.png"), text: "美容养生" },
        { img: require("./img/agent_cooperation/医疗.png"), text: "医疗健康" },
        { img: require("./img/agent_cooperation/百货.png"), text: "日用百货" },
        { img: require("./img/agent_cooperation/蛋糕.png"), text: "西点烘培" },
        { img: require("./img/agent_cooperation/数码.png"), text: "家电数码" },
        { img: require("./img/agent_cooperation/图书.png"), text: "图书音像" },
        { img: require("./img/agent_cooperation/饮料.png"), text: "茶饮酒水" },
        { img: require("./img/agent_cooperation/美妆.png"), text: "美发美妆" },
        { img: require("./img/agent_cooperation/生鲜.png"), text: "水果生鲜" },
        { img: require("./img/agent_cooperation/衣.png"), text: "服装鞋帽" },
        { img: require("./img/agent_cooperation/汽车.png"), text: "汽车服务" },
        { img: require("./img/agent_cooperation/礼品.png"), text: "礼品鲜花" },
        { img: require("./img/agent_cooperation/培训.png"), text: "教育培训" },
        { img: require("./img/agent_cooperation/更多.png"), text: "发现更多" }
      ]
    };
  },
  methods: {
    // count() {
    //   this.d_send = true;
    //   let _this = this;
    //   let interval = setInterval(function() {
    //     _this.d_count--;
    //     if (_this.d_count < 0) {
    //       _this.d_send = false;
    //       clearInterval(interval);
    //     }
    //   }, 1000);
    // },
    // sendMessage() {
    //   if (!this.apply_form.mobile) {
    //     this.$Message.warning("手机号码不能为空");
    //   } else {
    //     this.count(); // 计时函数
    //     apiAgent.sendMessage.data = {
    //       mobile: this.apply_form.mobile
    //     };
    //     apiAgent.sendMessage.post().then(_response => {
    //       if (_response.data.code == 200) {
    //         this.$Message.success("发送成功！");
    //       } else if (_response.data.code == 101) {
    //         this.$Message.error("手机号已注册！");
    //       } else {
    //         this.d_count = 0; //停止计时器
    //         this.d_send = false; // 显示发送按钮
    //         this.$Message.warning(_response.data.message);
    //       }
    //     });
    //   }
    // },
    rollApply() {
      let apply = this.$refs.applyForm;
      toRoll(apply);
    },
    toApply() {
      this.$refs.apply_form.validate(valid => {
        if (valid) {
          apiAgent.addAgent.data = this.apply_form;
          apiAgent.addAgent.post().then(_response => {
            this.d_count = 0; //停止计时器
            this.d_send = false; // 显示发送按钮
            if (_response.data.code == 200) {
              this.$Message.success("添加成功!");
              this.$refs.apply_form.resetFields(); //清空表单
            } else {
              this.$Message.error(_response.data.message);
            }
          });
        }
      });
    },
    // 触发动态获得 城市列表
    getCity(_value) {
      apiDictionary.query.data = {
        parentCode: _value
      };
      apiDictionary.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.cityList = _response.data.data.list;
        }
      });
    },
    // 触发动态获得 市 列表
    getArea(_value) {
      apiDictionary.query.data = {
        parentCode: _value
      };
      apiDictionary.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.areaList = _response.data.data.list;
        }
      });
    },
    getAddress() {
      apiDictionary.query.data = {
        parentCode: 86
      };
      apiDictionary.query.post().then(_response => {
        if (_response.data.code == 200) {
          this.provinceList = _response.data.data.list;
        }
      });
    }
  },
  created() {
    this.getAddress();
  }
};
</script>

<style lang="scss" scoped>
.clear {
  clear: both;
}
.banner {
  position: relative;
  text-align: center;
  color: #fff;
  width: 7.5rem;
  .banner_img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .banner_mask {
    height: 4rem;
    background-color: #000;
    filter: Alpha(Opacity=60);
    opacity: 0.1;
  }
  .banner_box {
    position: absolute;
    padding: 0.48rem 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  h1,
  h2 {
    font-size: 0.38rem;
    color: #2199e1;
  }
  h2 {
    margin: 0.3rem 0 0 0;
    letter-spacing: 0.04rem;
  }
  .phone {
    img {
      width: 0.34rem;
      float: left;
    }
    h1 {
      margin: 0.2rem 0 0.5rem 0;
      font-size: 0.5rem;
      color: #fff;
      font-weight: 500;
    }
  }
  .banner_btns {
    display: flex;
    .btn {
      margin: 0 0.55rem;
      width: 2.4rem;
      height: 0.64rem;
      line-height: 0.64rem;
      background-color: #2199e1;
      font-size: 0.26rem;
      color: #fff;
    }
  }
}
.good_at {
  padding: 0 0.3rem;
  color: #333;
  .good_at_top {
    margin: .2rem 0;
    text-align: center;
    font-size: 0.3rem;
    font-weight: 500;
  }
  .good_at_content {
    overflow: hidden;
    position: relative;
    margin: 0.17rem 0;
    .good_at_img {
      float: left;
      width: 3.82rem;
      height: 2.55rem;
      video {
        width: 3.82rem;
        height: 2.55rem;
      }
      img {
        width: 3.82rem;
        height: 2.55rem;
      }
    }
    .good_at_text {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 2;
      width: 3.3rem;
      height: 2.15rem;
      padding: 0.28rem 0.2rem;
      font-size: 0.26rem;
      background-color: #f1f1f1;
      .text_icon {
        position: absolute;
        top: 50%;
        left: -0.1rem;
        transform: translateY(-40%);
        transform: rotate(180deg);
      }
      .text_title {
        font-size: 0.28rem;
        text-align: right;
        font-weight: 500;
      }
      .text_content {
        margin: 0.35rem 0;
        padding: 0.05rem 0.02rem;
        text-align: left;
        color: #666;
        font-size: 0.26rem;
        line-height: 1.5;
        border-top: 0.01rem solid #2199e1;
      }
    }
  }
  .right_good_at {
    .good_at_img {
      float: right;
    }
    .good_at_text {
      left: 0;
      .right_icon {
        position: absolute;
        top: 50%;
        right: -0.1rem;
        transform: translateY(-40%);
      }
      .text_title {
        text-align: left;
      }
      .text_content {
        text-align: right;
      }
    }
  }
}
.merit {
  position: relative;
  color: #fff;
  text-align: center;
  padding: 0.3rem 0 0 0;
  // background: url('./img/agent_cooperation/bg_pic.png')no-repeat;
    background-size: cover;
  .merit_mask {
    height: 5.8erem;
    background-color: #000;
    filter: Alpha(Opacity=60);
    opacity: 0.2;
  }
  .merit_top {
    font-weight: 500;
  }
  .merit_content {
    display: inline-block;
    vertical-align: top;
    width: 1.56rem;
    font-size: 0.26rem;
    margin: 0.3rem 0.3rem;
    img{
      width: 1.05rem;
      height: 1.05rem;
    }
    .merit_text {
      margin: .2rem 0 0;
      line-height: 1.5;
    }
  }
}
.promise {
  text-align: center;
  padding: 0.3rem 0 0 0;
  .promise_top {
    font-weight: 500;
  }
  .promise_content {
    display: inline-block;
    vertical-align: top;
    width: 2.9rem;
    font-size: 0.24rem;
    color: #666;
    margin: 0.3rem 0.3rem;
    .promise_content_title {
      h1 {
        margin: 0.2rem 0;
      }
    }
    ul li {
      line-height: 1.5;
    }
  }
}
.cover {
  position: relative;
  color: #fff;
  text-align: center;
  padding: 0.3rem 0 0 0;
  // background: url('./img/agent_cooperation/banner.png')no-repeat;
  background-size: cover;
  .cover_top {
    font-weight: 500;
  }
  .cover_content {
    display: inline-block;
    vertical-align: top;
    width: 1rem;
    font-size: 0.24rem;
    margin: 0.3rem 0.2rem;
    p {
      margin: 0.15rem 0;
    }
  }
}
.apply {
  width: 6rem;
  margin: 0 auto;
  text-align: center;
  .apply_top {
    padding: 0.2rem 0;
  }
  .apply_content {
    color: #999;
    font-size: 0.24rem;
    .apply_form {
      .form_btn {
        color: #fff;
        border-radius: 0.05rem;
        background-color: #2199e1;
        box-shadow: 0.05rem 0.05rem 0.1rem #ccc;
      }
      .send_btn {
        width: 1.46rem;
        height: 0.7rem;
        line-height: 0.7rem;
        border-radius: 0.05rem;
        font-size: 0.22rem;
      }
      .apply_btn {
        margin: 0.2rem auto;
        width: 2.4rem;
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.28rem;
      }
    }
  }
}
</style>

