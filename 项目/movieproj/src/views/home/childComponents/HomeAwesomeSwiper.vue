<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in banners" :key="item.acm" class="swiper-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoaded">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "HomeAwesomeSwiper",
    props: {
      banners: {
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
    methods: {
      imgLoaded() {
        if (!this.isLoad) {
          this.$emit("swiperImgLoaded");
          this.isLoad = true;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-item img {
    width: 100%;
  }
</style>
