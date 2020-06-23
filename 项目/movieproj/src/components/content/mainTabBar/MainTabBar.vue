/* 
将TabBar和TabBarItem继续封装成MainTabBar组件，目的是让使用TabBar组件时的代码结构简化，一目了然。
由于跟业务关系紧密，所以MainTabBar组件要放在components/content目录下。
 */
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <img slot="item-icon" src="~@/assets/image/icons/home.png" alt="">
      <img slot="item-icon-active" src="~@/assets/image/icons/home-act.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/movie">
      <img slot="item-icon" src="~@/assets/image/icons/movie.png" alt="">
      <img slot="item-icon-active" src="~@/assets/image/icons/movie-act.png" alt="">
      <div slot="item-text">电影</div>
    </tab-bar-item>
    <tab-bar-item path="/ticket">
      <img slot="item-icon" src="~@/assets/image/icons/ticket.png" alt="">
      <img slot="item-icon-active" src="~@/assets/image/icons/ticket.png" alt="">
      <div slot="item-text">优惠券</div>
    </tab-bar-item>
    <tab-bar-item path="/cinema">
      <img slot="item-icon" src="~@/assets/image/icons/cinema.png" alt="">
      <img slot="item-icon-active" src="~@/assets/image/icons/cinema-act.png" alt="">
      <div slot="item-text">影院</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~@/assets/image/icons/main.png" alt="">
      <img slot="item-icon-active" src="~@/assets/image/icons/main-act.png" alt="">
      <div slot="item-text">信息</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  };
</script>

<style lang="scss" scoped>

</style>
