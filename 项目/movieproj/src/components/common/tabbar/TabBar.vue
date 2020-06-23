<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  };
</script>

<style scoped lang="scss">
  #tab-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #eee;
    display: flex;
  }
</style>
