<template>
  <div class="index">
    <main-header></main-header>
    <router-view></router-view>
    <!-- <div class="footer"> -->
      <main-footer></main-footer>
    <!-- </div> -->
  </div>
</template>
<script>
import mainHeader from "./_header";
import mainFooter from "./_footer";

export default {
  components: {
    mainHeader,
    mainFooter,
  },

  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.index {
  width: 7.49rem;
  padding-bottom: 1rem; 
  // .footer{
    // position: fixed;
    // bottom: 0;
    // z-index: 999;
  // }
}
</style>