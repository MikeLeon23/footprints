<template>
  <div>
    <nav-bar class="home-nav"><div slot="mid">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
  // 引入组件
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComponents/HomeSwiper'
  import RecommendView from './childComponents/RecommendView'

  // 引入方法
  import {getHomeMultidata} from '@/network/home.js'

  export default {
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  };
</script>

<style lang="scss" scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
