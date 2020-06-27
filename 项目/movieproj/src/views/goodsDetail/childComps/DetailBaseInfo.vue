<template>
  <div class="base-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-title">
      <p>{{detailInfo.desc}}</p>
    </div>
    <div class="info-price">
      <span class="new-price">{{detailInfo.price}}</span>
      <span class="old-price">{{detailInfo.oldPrice}}</span>
      <span v-if="detailInfo.discountDesc" class="discount">{{detailInfo.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{detailInfo.columns[0]}}</span>
      <span>{{detailInfo.columns[1]}}</span>
      <span>{{detailInfo.services[detailInfo.services.length - 1].name}}</span>
    </div>
    <div class="info-service">
      <div v-for="index in detailInfo.services.length-1" :key="index">
        <img v-if="detailInfo.services[index-1].icon" :src="detailInfo.services[index-1].icon" alt="">
        <span>{{detailInfo.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;

    .info-title {
      color: #222
    }

    .info-price {
      margin-top: 10px;

      .new-price {
        font-size: 24px;
        color: var(--color-high-text);
      }

      .old-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
      }

      .discount {
        font-size: 12px;
        padding: 2px 5px;
        color: #fff;
        background-color: var(--color-high-text);
        border-radius: 8px;
        margin-left: 5px;

        /*让元素上浮一些: 使用相对定位即可*/
        position: relative;
        top: -8px;
      }
    }

    .info-other {
      margin-top: 15px;
      line-height: 30px;
      display: flex;
      font-size: 13px;
      border-bottom: 1px solid rgba(100,100,100,.1);
      justify-content: space-between;
    }

    .info-service {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      line-height: 60px;

      img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
      }

      span {
        font-size: 13px;
        color: #333;
      }
    }
  }
</style>
