<template>
  <swiper ref="mySwiper" :options="swiperOptions" class="mySwiper">
    <swiper-slide v-for="item in topImages" class="swiper-item">
      <a :href="item.link">
        <img :src="item" alt="">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  // 引入公共组件
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true,
          autoplay: true
          // Some Swiper option/callback...
        }
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
  };
</script>

<style lang="scss" scoped>
  .mySwiper {
    height: 300px;

    .swiper-item img {
      width: 100%;
    }
  }
</style>
