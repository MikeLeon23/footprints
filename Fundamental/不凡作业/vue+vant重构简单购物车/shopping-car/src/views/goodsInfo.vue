<template>
  <div class="goods-info">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      :title="goodsOnDisplay.name"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <!-- 轮播 -->
    <van-swipe class="swiper" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="description">{{ goodsOnDisplay.descri }}</div>
    <div class="price">
      商品价格: <span>{{ goodsOnDisplay.price }}</span>
    </div>
    <div class="remain">
      剩余商品数量: <span>{{ goodsOnDisplay.num }}</span>
    </div>
    <van-button class="add-to-shoppingcar" type="primary" size="large" @click="addToShoppingcar" :disabled="disabled">
      加入购物车
      <span>{{ numInCar }}</span>
    </van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null
    };
  },
  computed: {
    goodsOnDisplay() {
      return this.$store.state.goods.list.find(item => item.id === this.id);
    },
    numInCar() {
      return this.$store.state.goods.shoppingCar.reduce((total, current) => {
        return total + current.num;
      }, 0);
    },
    disabled() {
      return this.goodsOnDisplay.num ? false : true;
    }
  },
  created() {
    this.id = this.$route.params.id;
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.id = to.params.id;
    next();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addToShoppingcar() {
      this.$store.commit("goods/addToCar", this.id);
    }
  }
};
</script>

<style scoped lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

.goods-info {
  width: 100%;
  height: 100%;
}

.top {
  position: relative;
  display: flex;
  height: 50px;

  .return {
    position: absolute;
    height: 100%;
    padding: 0 10px;
    line-height: 50px;
    color: skyblue;
    left: 15px;
    top: 0;
  }

  .title {
    margin: auto;
  }
}

.description {
  padding: 10px 5px;
}

.remain {
  padding: 0 5px;
}

.price {
  padding: 0 5px;
  margin-bottom: 10px;
}

.swiper {
  width: 100%;
  img {
    width: 100%;
  }
}

.add-to-shoppingcar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
