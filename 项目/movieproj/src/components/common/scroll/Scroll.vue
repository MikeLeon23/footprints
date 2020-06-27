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
      },
      pullUpLoad: {
        type: Boolean,
        default: false
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
        click: true,
        pullUpLoad: this.pullUpLoad,
      });
      // 2. 监听滚动的位置, 发送自定义事件
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", position => {
          this.$emit("scroll", position);
        });
      }

      // 3. 监听上拉加载更多, 发送自定义事件
      if (this.pullUpLoad) {
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 400) {
        /* 逻辑与&&前面是为了检查scroll对象是否已经初始化完成, 如果调用的时候
        还没有初始化, 那么&&右边的代码不会执行, 可以避免爆红 */
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      refresh() {
        console.log("scroll refreshed");
        this.scroll && this.scroll.refresh();
      },
      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
