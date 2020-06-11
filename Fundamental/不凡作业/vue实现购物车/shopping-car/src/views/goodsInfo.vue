<template>
  <div class="goods-info">
    <div class="top">
      <div class="return" @click="goBack">&lt;返回</div>
      <div class="title">{{ goodsOnDisplay.name }}</div>
    </div>
    <swiper ref="mySwiper" class="swiper" :options="swiperOptions">
      <swiper-slide>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img :src="goodsOnDisplay.imgSrc" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="description">{{ goodsOnDisplay.descri }}</div>
    <div class="price">
      商品价格: <span>{{goodsOnDisplay.price}}</span>
    </div>
    <div class="remain">
      剩余商品数量: <span>{{goodsOnDisplay.num}}</span>
    </div>
    <div class="add-to-shoppingcar" @click="addToShoppingcar">
      加入购物车<span>{{numInCar}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop: true
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    goodsOnDisplay() {
      return this.$store.state.goods.list.find(item => (item.id === this.id));
    },
    numInCar() {
      return this.$store.state.goods.shoppingCar.reduce((total, current) => {
        return total + current.num;
      }, 0);
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
  width: 100%;
  height: 52px;
  background-color: green;
  text-align: center;
  line-height: 50px;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
