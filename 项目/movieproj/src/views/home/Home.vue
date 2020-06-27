<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="mid">购物街</div></nav-bar>
    <tab-control ref="tabControl1" class="home-tab-control" 
    :titles="titles" @tabClick="tabClick" v-show="isTabFixed"></tab-control>
    <scroll class="scroll-wrapper" ref="scroll" :probe-type="3" 
    @scroll="handleScroll" :pull-up-load="true" @pullingUp="loadMore">
      <!-- 王红元老师封装的swiper有点问题, 有时分页器会加载不出而无法滑动, 在找到解决办法之前, 先用网上的swiper -->
      <!-- <home-swiper :banners="banners" @swiperImgLoaded="swiperImgLoaded"></home-swiper> -->
      <home-awesome-swiper :banners="banners" @swiperImgLoaded="swiperImgLoaded"></home-awesome-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabControl2" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goodsOnDisplay"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
  // 引入公共组件
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import TabControl from '@/components/content/tabControl/TabControl'
  import GoodsList from '@/components/content/goods/GoodsList'
  import BackTop from '@/components/content/backTop/BackTop'

  // 引入页面子组件
  // import HomeSwiper from './childComponents/HomeSwiper'
  import HomeAwesomeSwiper from './childComponents/HomeAwesomeSwiper'
  import RecommendView from './childComponents/RecommendView'
  import FeatureView from './childComponents/FeatureView'

  // 引入方法
  import { getHomeMultidata, getHomeGoods } from '@/network/home.js'
  import { debounce } from '@/common/utils.js'

  export default {
    components: {
      NavBar,
      Scroll,
      TabControl,
      // HomeSwiper,
      HomeAwesomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      BackTop
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
        currentType: "pop",
        showBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveScrollY: 0
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
    mounted() {
      const debouncedRefresh = debounce(this.$refs.scroll.refresh, 50);
      // 1. 监听GoodsList组件中的图片加载完成
      this.$bus.$on("itemImageLoaded", () => {
        debouncedRefresh();
      })
    },
    activated() {
      // 进入时, scroll组件滚动到离开前记录的位置
      this.$refs.scroll.scrollTo(0, this.saveScrollY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      // 离开时, 记录scroll组件滚动到的位置
      this.saveScrollY = this.$refs.scroll.getScrollY();
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        const arr = ["pop", "new", "sell"];
        this.currentType = arr[index];
        this.$refs.tabControl1.activeIndex = index;
        this.$refs.tabControl2.activeIndex = index;
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      handleScroll(position) {
        // 1. 控制backTop按钮的显示
        this.showBackTop = (-position.y) > 1000;

        // 2. 控制tabcontrol的吸顶效果
        this.isTabFixed = (-position.y) > this.tabOffsetTop;
      },
      loadMore() {
        console.log("上拉加载更多");
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();
      },
      swiperImgLoaded() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
          // 另一种实现方式, 拓展运算符逐个取出然后push到指定数组中
          // this.goods[type].list.push(...res.data.list)
          this.goods[type].page++;
        })
      },
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
      z-index: 1;
    }

    .scroll-wrapper {
      height: calc(100vh - 44px - 49px);
      overflow: hidden;
      position: relative;
    }

    .home-tab-control {
      position: fixed;
      top: 44px;
      left: 0;
      z-index: 1;
    }
  }
</style>
