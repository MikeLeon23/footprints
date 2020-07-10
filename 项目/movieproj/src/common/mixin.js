import {debounce} from '@/common/utils.js'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const debouncedRefresh = debounce(this.$refs.scroll.refresh, 50);
    // 1. 监听GoodsList组件中的图片加载完成
    this.itemImgListener = () => {
      debouncedRefresh();
    }
    this.$bus.$on("itemImageLoaded", this.itemImgListener);
  }
};