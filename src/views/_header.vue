<template>
  <div class="header">
    <div class="box">
      <div class="logo_box">
        <img class="logo" :src="require('./img/pic_logo.png')"/>
        <img class="logo_text" :src="require('./img/pic_name.png')"/>
      </div>
      <div class="user clear">
        <!-- <a target="_blank" href="https://admin.yzsaas.cn/WeixinManager/index.jsp">
          <div class="user_login">登录</div>
        </a> -->
        <!-- <img @click="d_menu = !d_menu" class="user_icon" :src="require('./img/ic_hanburger.png')" alt="" srcset=""> -->
        <!-- <transition name="fade">
          <ul class="user_menu" v-if="d_menu">
            <router-link v-for="(item, key) of d_titleList" :key="key" :to="{ path: `${item.path}` }">
              <li class="active" @click="d_menu = false" v-text="item.name"></li>
              <ul class="user_menu_item">
                <router-link v-for="(i, key) of item.children" :key="key" :to="{ path: `${i.path}` }">
                <li class="item_active" @click="d_menu = false" v-text="i.name"></li>
                </router-link>
              </ul>
            </router-link>
          </ul>
        </transition> -->
			</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      d_menu: false,
      d_titleList: [
        {
          name: "首页",
          path: " ",
          // children: [{ name: "小程序", path: "/mini_programs" }]
        },
        // { name: "小程序", path: "/mini_programs" },
        {
          name: " 代理合作",
          path: "/agent_cooperation"
        },
        {
          name: "代理案例",
          path: "/agent_case"
        },
        {
          name: "关于我们",
          path: "/about_us"
        },
        // {
        //   name:"优惠活动",
        //   path:"/activity"
        // },
        // {
        //   name: "特别活动",
        //   path: "/activity_special"
        // },
        // {
        //   name: "ceshi",
        //   path: "/test"
        // }
      ]
    };
  },
  created() {},
  methods: {
    toPath(_key, _path) {
      this.d_click = _key;
      this.$router.push({ path: _path });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.clear {
  clear: both;
}
.header {
  padding: 0.18rem 0.28rem;
  .logo_box {
    display: inline-block;
    .logo {
      width: 0.65rem;
      height: 0.65rem;
      margin-right: 0.1rem;
    }
  }
  .user {
    position: relative;
    float: right;
    top: 0.1rem;
    background-color: #fff;
    .user_login {
      display: inline-block;
      width: 1.2rem;
      border: 1px solid #2199e1;
      border-radius: 0.08rem;
      text-align: center;
      line-height: 0.55rem;
      font-size: 0.28rem;
      color: #2199e1;
    }
    .user_icon {
      width: 0.48rem;
      height: 0.28rem;
    }
    .user_menu {
      position: absolute;
      right: -0.28rem;
      top: 0.7rem;
      width: 2.4rem;
      padding: 0.4rem 0 0;
      z-index: 5;
      box-shadow: 0 0 8px #ccc;
      background-color: #fff;
      li {
        padding: 0 0.2rem 0.4rem;
        width: 2.4rem;
        font-size: 0.24rem;
        color: #666;
      }
      .user_menu_item {
        width: 2.4rem;
        padding: 0.06rem 0 0 0.06rem;
      }
      .router-link-active .item_active {
        color: #2199e1;
      }
      .router-link-active .active {
        color: #2199e1;
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
  }
}
</style>