<template>
  <div id="app">
    <router-view></router-view>
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
