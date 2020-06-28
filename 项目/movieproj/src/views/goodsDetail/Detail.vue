<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
    <detail-base-info :detail-info="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </div>
</template>

<script>
  // 页面子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'

  // 引入方法
  import {getGoodsDetail, Goods, Shop} from '@/network/detail.js'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    data() {
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {}
      }
    },
    created(){
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid;

      // 2. 根据iid请求detail数据
      getGoodsDetail(this.iid).then(res => {
        // 1. 获取顶部的轮播图片数据
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        // 2. 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        // 3. 获取店铺信息
        this.shop = new Shop(data.shopInfo);
      })
    },
    methods: {  
      back() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
