<template>
  <div class="footer">
    <ul class="user_menu">
      <router-link v-for="(item, key) of d_titleList" :key="key" :to="{ path: `${item.path}` }">

        <li class="active">
          <img class="icon" :src="item.icon" alt="" srcset="">
          <img class="icon2" :src="item.icon2" alt="" srcset="">
          <span v-text="item.name"></span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d_active: false,
      d_titleList: [
        {
          name: "首页",
          path: " ",
          icon: require("./img/footer/home.png"),
          icon2: require("./img/footer/home_active.png")
        },
        {
          name: "小程序",
          path: "/mini_programs",
          icon: require("./img/footer/mini.png"),
          icon2: require("./img/footer/mini_active.png")
        },
        {
          name: "代理案例",
          path: "/agent_case",
          icon: require("./img/footer/case.png"),
          icon2: require("./img/footer/case_active.png")
        },
        {
          name: " 代理合作",
          path: "/agent_cooperation",
          icon: require("./img/footer/cooperation.png"),
          icon2: require("./img/footer/cooperation_active.png")
        },
        {
          name: "关于我们",
          path: "/about_us",
          icon: require("./img/footer/us.png"),
          icon2: require("./img/footer/us_active.png")
        }
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
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  // padding: .1rem 0;
  font-size: 0.22rem;
  color: #999;
  text-align: center;
  background-color: #f1f1f1;
  ul {
    display: flex;
    align-content: space-between;
    a {
      width: 20%;
    }
    li {
      text-align: center;
      font-size: 0.2rem;
      img {
        margin: 0.1rem 0;
        width: 0.5rem;
        height: 0.5rem;
      }
      span {
        display: block;
        margin: 0 0 0.1rem 0;
      }
    }
    .icon2 {
      display: none;
    }
    .router-link-active .active {
      color: #28b2b2;
      .icon {
        display: none;
      }
      .icon2 {
        display: inline-block;
      }
    }
  }
}
</style>

