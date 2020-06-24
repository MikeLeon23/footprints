<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="mid"><slot name="mid"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  };
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  .left {
    width: 60px;
  }
  .mid {
    flex: 1;
  }
  .right {
    width: 60px;
  }
}
</style>
