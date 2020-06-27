<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  // 引入公共组件
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper, 
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
