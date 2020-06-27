<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
  // 页面子组件
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'

  // 引入方法
  import {getGoodsDetail} from '@/network/detail.js'

  export default {
    name: "GoodsDetail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data() {
      return {
        iid: '',
        topImages: []
      }
    },
    created(){
      // 1. 保存传入的iid
      this.iid = this.$route.params.iid;

      // 2. 请求detail数据
      getGoodsDetail(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
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
