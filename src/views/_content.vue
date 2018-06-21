<template>
  <div class="content">
      <div class="box">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import mainFooter from "./_footer";
export default {
  components: {
    mainFooter
  },
  data() {
    return {};
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
.content {
  // height: inherit;
  // padding: 10px 22%;
  //   padding: 100px 22% 10px;
//   overflow-y: auto;
//   max-height: calc(100vh - 100px);
    background-color: #dfdfdf;
  .box {
    margin: 0 auto;
    width: 1200px;
    // padding: 0 16px;
    // background-color: #dfdfdf;
  }
}
</style>

