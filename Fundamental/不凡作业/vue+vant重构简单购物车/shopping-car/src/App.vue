<template>
  <div id="app">
    <van-tabbar route v-model="active" v-if="!hideBottom">
      <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="shopping-cart-o" to="/car">购物车</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" to="/about">个人信息</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
import Mock from "./assets/js/mock.js";

let Random = Mock.Random;

export default {
  data() {
    return {
      hideBottom: false,
      active: 'home'
    };
  },
  created() {
    this.initToken();
    this.init();
  },
  updated() {
    this.hideBottom = this.$route.meta.hideBottomBar;
  },
  methods: {
    initToken() {
      if (localStorage.getItem("token")) {
        this.$store.state.user = localStorage.getItem("token");
      }
    },
    init() {
      let goodsList = [];
      for (let i = 0; i < 10; i++) {
        let item = {
          id: Random.guid(),
          name: Random.ctitle(),
          num: 10,
          price: Math.ceil(Math.random()*30) + 10,
          imgSrc: Random.dataImage("200x100"),
          descri: Random.cparagraph()
        };
        goodsList.push(item);
      }
      this.$store.commit("goods/initGoodsList", goodsList);
    }
  }
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border: 1px solid silver;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
