<template>
  <div>
    <div class="car-item" v-for="item in list" :key="item.id">
      <div>
        <input type="checkbox" v-model="item.checked" />
        <p>{{ item.name }}</p>
      </div>
      <div class="num">
        <button @click="sub(item.id)">-</button>
        <p>{{ item.num }}</p>
        <button @click="add(item.id)">+</button>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="check-all">
        <input type="checkbox" v-model="allchecked" />
        <span>全选</span>
      </div>
      <div class="total-price">
        <span>总价：{{ totalCost }}</span>
      </div>
    </div>
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
          if(current.checked) {
              return total + current.num * current.price;
          }else{
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
    }
  }
};
</script>

<style scoped lang="scss">
.car-item {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid silver;
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
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 50px;
  left: 0;
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
</style>
