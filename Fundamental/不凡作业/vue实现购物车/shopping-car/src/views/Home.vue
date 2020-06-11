<template>
  <div class="home">
    <ul class="goods-list">
      <router-link tag="li" v-for="item in list" :key="item.id" :to="`/info/${item.id}`">
        <img :src="item.imgSrc" alt="">
        <p class="name">{{item.name}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  computed: {
    list() {
      return this.$store.state.goods.list;
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.goods-list{
  width: 100%;
  margin-bottom: 55px;

  li {
    width: calc(100% - 50px);
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 40%;
    }

    p {
      width: 50%;
    }

  }
}
</style>
