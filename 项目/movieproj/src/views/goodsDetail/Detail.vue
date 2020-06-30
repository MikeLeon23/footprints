<template>
  <div>
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :detail-info="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"></detail-param-info>
    </scroll>
  </div>
</template>

<script>
  // 公共组件
  import Scroll from '@/components/common/scroll/Scroll'

  // 页面子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'

  // 引入方法
  import {getGoodsDetail, Goods, Shop, GoodsParam} from '@/network/detail.js'

  export default {
    name: "Detail",
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo
    },
    data() {
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {}
      }
    },
    created(){
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid;

      // 2. 根据iid请求detail数据
      getGoodsDetail(this.iid).then(res => {
        // 1. 获取顶部的轮播图片数据
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        // 3. 获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 4. 保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 5. 保存商品的参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      })
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .detail-nav-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .detail-scroll {
    margin-top: 44px;
    height: calc(100vh - 44px);
    overflow: hidden;
  }
</style>
