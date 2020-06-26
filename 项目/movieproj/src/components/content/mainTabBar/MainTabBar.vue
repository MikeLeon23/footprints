/* 
将TabBar和TabBarItem继续封装成MainTabBar组件，目的是让使用TabBar组件时的代码结构简化，一目了然。
由于跟业务关系紧密，所以MainTabBar组件要放在components/content目录下。
 */
<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <img slot="item-icon" src="~@/assets/image/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/image/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~@/assets/image/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/image/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/ticket">
      <img slot="item-icon" src="~@/assets/image/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/image/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/cinema">
      <img slot="item-icon" src="~@/assets/image/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~@/assets/image/tabbar/profile_active.svg" alt="">
      <div slot="item-text">个人中心</div>
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
