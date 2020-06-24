<template>
  <!-- 不使用router-link标签的话，需要监控点击事件 -->
  <!-- <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div> -->
  <router-link tag="div" :to="path" class="tab-bar-item">
    <!-- 每一个slot外面都要包裹上div，是为了避免直接写在slot上的css类和样式，因slot在渲染时被直接替换而不生效 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </router-link>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      // 父组件传入的路由path
      path: String,
      // 父组件传入的文字激活颜色, 对象形式, 可以设置默认值
      activeColor: {
        type: String,
        default: "red"
      }
    },
    data() {
      return {

      }
    },
    computed: {
      // 控制显示灰色/亮色icon的计算属性
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      // 控制激活icon下面文字颜色的样式，返回一个样式对象绑定在文字标签上
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    // 使用router-link标签，则不需要通过点击事件处理跳转。
    // 避免了连续点击同一个导航时的Error: Avoided redundant navigation to current location
    // methods: {
    //   itemClick() {
    //     this.$router.push(this.path);
    //   }
    // }
  };
</script>

<style scoped lang="scss">
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
    // 这里给img设置的样式不生效，必须取消scoped才会生效。如果不用router-link标签就行，原因未知。
    // img {    
    //   width: 24px;
    //   height: 24px;
    //   vertical-align: bottom;
    //   margin: 3px 0 2px;
    // }
  }
</style>

<style lang="scss">
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: bottom;
  margin: 3px 0 2px;
}
</style>
