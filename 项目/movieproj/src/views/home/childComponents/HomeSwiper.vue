/* 王红元老师封装的Swiper有问题, 目前已弃用 */
<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper'

  export default {
    name: "HomeSwiper",
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
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
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

</style>
