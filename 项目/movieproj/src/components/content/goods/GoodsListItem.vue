<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoaded">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      imgLoaded() {
        this.$bus.$emit("itemImageLoaded");
      },
      itemClick() {
        this.$router.push("/detail/" + this.goodsItem.iid);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .goods-list-item {
    width: 48%;
    margin-bottom: 5px;
    text-align: center;

    img {
      width: 100%;
      border-radius: 5px;
      margin-bottom: 3px;
    }

    .goods-info {
      font-size: 12px;
      margin: 0 auto;

      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 3px;
      }

      .price {
        color: var(--color-high-text);
      }

      .collect {
        padding-left: 20px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 6px;
          top: -0.5px;
          width: 14px;
          height: 14px;
          background: url("~@/assets/image/common/collect.svg") 0 0/14px 14px;
        }
      }
    }
  }
</style>
