<template>
  <div class="about_us">
    <call></call>
    <div class="ad" :style="{backgroundImage:'url('+require('./img/about_us/bg.png')+')'}"></div>
    <div class="us">
      <img :src="require('./img/about_us/ic_arrow.png')" alt="" srcset="">
        <div class="us_title">
            <h1>ABOUT  US</h1>
            <p>关于我们</p>
        </div>
        <div class="us_text">
            <p>北京九天云竹信息技术股份公司成立于2013年11月
                25日，构建布局移动互联网战略，旨在成为中国领先的
                移动互联网运营方案提供商，同时也是一家知名的国家级
                高新技术企业。</p>
            <p>公司立足于北京，面向全国开展业务。业务包括技术
                开发、标准软件、SAAS平台、教育培训、视频媒体、O2
                O等自营矩阵式业务线。公司于2016年7月4日取得全国中
                小企业股份转让系统挂牌函，股票名称：云竹信息；股票
                代码为837939。</p>
            <p>未来公司将利用将充分利用移动互联网发展契机，打造一
                个健康发展的高成长公司。</p>
        </div>
    </div>
    <div class="contact">
        <div class="contact_text">
            <div class="contact_title">
                <h1>CONTACT US</h1>
                <p>联系我们</p>  
            </div>
            <div class="contact_content">
            <p>地 址：北京海淀区羊坊店路光耀东方N座</p>
            <p>电 话：13718061705</p>
            <p>传 真：010-82626623</p>
            <p>邮 箱：admin@listplus.cn</p>
            </div>
        </div>
        <div class="contact_img" :style="{backgroundImage:'url('+require('./img/about_us/pi_office.png')+')'}"></div>
    </div>
  </div>
</template>

<script>
import call from "./_call";
export default {
  components: {
    call
  },
  data() {
    return {
      banner_icon: null,
      d_list: []
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.about_us {
  color: #333;
  .ad {
    height: 2.5rem;
    // background: url("./img/about_us/bg.png") no-repeat center center;
    background-position: center center;
    background-size: cover;
  }
  .us {
    width: 6.34rem;
    margin: 0.18rem auto;
    padding: 0.4rem;
    color: #666;
    font-size: 0.22rem;
    line-height: 2;
    box-shadow: 0 0 0.1rem #ccc;
    background-color: #f1f1f1;
    img {
      margin: -1.5rem 0 0 50%;
      transform: translateX(-50%);
    }
    .us_title {
      margin: -0.2rem 0 0 0;
      text-align: center;
      color: #2199e1;
      h1 {
        font-size: 0.36rem;
      }
      p {
        width: 3rem;
        margin: 0.18rem auto;
        border-top: 0.02rem solid #2199e1;
        font-size: 0.3rem;
      }
    }
    .us_text {
      text-indent: 0.35rem;
    }
  }
  .contact {
    position: relative;
    padding: 0.3rem 0.48rem;
    background-color: #80ccf9;
    color: #fff;
    font-size: 0.26rem;
    .contact_title {
      h1 {
        font-size: 0.36rem;
      }
      p {
        width: 3rem;
        margin: 0.18rem 0;
        padding: 0.18rem 0 0 0;
        border-top: 0.02rem solid #fff;
        font-size: 0.3rem;
      }
    }
    .contact_content {
      margin: 0.66rem 0 0;
      width: 3.8rem;
      white-space: pre-wrap;
      word-wrap: break-word;
      p {
        margin: -0.1rem 0;
        line-height: 1.5;
      }
    }
    .contact_img {
      position: absolute;
      top: 0.62rem;
      right: 0.3rem;
      width: 2.29rem;
      height: 2.92rem;
      // background: url("./img/about_us/pi_office.png")no-repeat center center;
      background-size: cover;
    }
  }
}
</style>

