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
    mounted() {
      new BScroll(this.$refs.wrapper, {
        probeTyep: 2,
        click: true
      });
    }
  };
</script>

<style lang="scss" scoped>

</style>
