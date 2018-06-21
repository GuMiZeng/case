<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",

};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/common.css";
@media screen and (max-width: 321px) {
    body {
        font-size:16px
    }
}

@media screen and (min-width: 321px) and (max-width:400px) {
    body {
        font-size:17px
    }
}

@media screen and (min-width: 400px) {
    body {
        font-size:19px
    }
}
</style>
