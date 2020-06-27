<template>
  <div id="app">
    <keep-alive exclude="GoodsDetail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from '@/components/content/mainTabBar/MainTabBar.vue'
  export default {
    components: {
      MainTabBar
    }
  };
</script>

<style lang="scss">

</style>
