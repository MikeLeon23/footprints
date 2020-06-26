<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="mid">购物街</div></nav-bar>
    <scroll class="scroll-wrapper">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="home-tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goodsOnDisplay"></goods-list>
    </scroll>
  </div>
</template>

<script>
  // 引入公共组件
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'

  // 引入页面子组件
  import HomeSwiper from './childComponents/HomeSwiper'
  import RecommendView from './childComponents/RecommendView'
  import FeatureView from './childComponents/FeatureView'

  // 引入方法
  import { getHomeMultidata, getHomeGoods } from '@/network/home.js'

  export default {
    components: {
      NavBar,
      Scroll,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList
    },
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          pop: {page: 1, list: []},
          new: {page: 1, list: []},
          sell: {page: 1, list: []}
        },
        currentType: "pop"
      }
    },
    computed: {
      goodsOnDisplay() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      // 1. 请求多个数据
      this.getHomeMultidata();
      // 2. 请求商品数据
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        const arr = ["pop", "new", "sell"];
        this.currentType = arr[index];
      },

      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        // 方法前面没有this, 说明调用的是通过import引入的方法
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page;
        getHomeGoods(type, page).then(res => {
          this.goods[type].list = this.goods[type].list.concat(res.data.list);
        })
        this.goods[type].page++;
      }
    }
  };
</script>

<style lang="scss" scoped>
  #home {
    padding-top: 44px;

    .home-nav {
      background-color: var(--color-tint);
      color: #fff;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
    }

    .scroll-wrapper {
      height: calc(100vh - 44px - 49px);
      overflow: hidden;
      position: relative;

      .home-tab-control {
        position: sticky;
        top: 44px;
      }
    }

  }
</style>
