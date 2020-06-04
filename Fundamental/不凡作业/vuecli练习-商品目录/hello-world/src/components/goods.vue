<template>
  <div class="goods">
    <div class="img">
      <img :src="img" alt="" srcset="" />
    </div>
    <p class="title">{{ title }}</p>
    <button @click="detail">详情</button>
  </div>
</template>

<script>
export default {
  name: "goods",
  props: ["img", "title", "id"],
  methods: {
    detail() {
      this.$emit("update-display", this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
  .goods {
    width: 200px;
    margin-right: 50px;
    margin-bottom: 50px;
    box-sizing: border-box;
    border: solid 1px red;
  }

  .goods:nth-child(3n) {
    margin-right: 0;
  }

  .goods .title {
    font-size: 18px;
  }
</style>