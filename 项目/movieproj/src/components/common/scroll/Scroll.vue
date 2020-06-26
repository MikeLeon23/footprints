<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      // 1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        /* probeType属性, 默认为0, 为0和1时滚动不会被监听
        值为2时, 手指在屏幕上的滚动会被监听, 离开后的滚动不会被监听
        值为3时, 所有页面滚动都会被监听, 不论手指是否还在触摸屏幕 */
        probeType: this.probeType,
        // click属性默认为false, 此时只有按钮可以点击, 其他dom元素上的点击事件不能触发
        click: true
      });
      // 2. 监听滚动的位置, 发送自定义事件
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    },
    methods: {
      scrollTo(x, y, time = 400) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
