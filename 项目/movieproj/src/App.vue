<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-if="!$route.meta.hideNavBar"></main-tab-bar>
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
