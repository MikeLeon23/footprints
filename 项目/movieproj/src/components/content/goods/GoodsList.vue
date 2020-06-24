<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      GoodsListItem
    }
  };
</script>

<style lang="scss" scoped>
  .goods-list {
    margin: 0 auto;
    padding-top: 2px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
