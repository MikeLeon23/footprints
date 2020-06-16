<template>
  <div>
    <!-- 购物车中的商品列表 -->
    <van-list>
      <van-cell class="car-item" v-for="item in list" :key="item.id">
        <div>
          <van-checkbox v-model="allchecked" shape="square">{{item.name}}</van-checkbox>
        </div>
        <!-- 步进器 -->
        <van-stepper 
          v-model="item.num" 
          min="0" 
          max="10"
          @plus="add(item.id)"
          @minus="sub(item.id)"
          @blur="blured(item.id, item.num)"
        ></van-stepper>
      </van-cell>
    </van-list>
    <van-cell class="bottom-bar" size="large">
      <div class="check-all">
        <van-checkbox v-model="allchecked" shape="square">全选</van-checkbox>
      </div>
      <div class="total-price">
        <span>总价：{{ totalCost }}</span>
      </div>
    </van-cell>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null
    };
  },
  computed: {
    // 商品总价，此页面商品列表元素经过计算属性获得
    totalCost() {
      return this.list.reduce((total, current) => {
        if (current.checked) {
          return total + current.num * current.price;
        } else {
          return total;
        }
      }, 0);
    },
    // 全选按钮，通过store/goods里面的getter计算属性获得
    allchecked: {
      get() {
        return this.$store.getters["goods/allchecked"];
      },
      set(val) {
        this.$store.commit("goods/checkOrNot", val);
      }
    }
  },
  created() {
    this.list = this.$store.state.goods.shoppingCar;
  },
  methods: {
    add(id) {
      this.$store.commit("goods/increase", id);
    },
    sub(id) {
      this.$store.commit("goods/reduce", id);
    },
    blured(id, num) {
      // console.log(id, num);
      
      // this.$store.commit("goods/changeByInput", [id, num]);
      // 就你妈离谱，草你妈的
    }
  }
};
</script>

<style scoped lang="scss">
.car-item .van-cell__value.van-cell__value--alone {
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    padding: 0 10px;
    display: flex;
    align-items: center;
    p {
      margin: 0 10px;
    }
  }
}

.bottom-bar {
  position: fixed;
  bottom: 50px;
  left: 0;

  .van-cell__value.van-cell__value--alone {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .check-all {
      padding: 0 10px;
      span {
        padding: 0 10px;
      }
    }

    .total-price {
      padding: 0 10px;
    }
  }
}
</style>
