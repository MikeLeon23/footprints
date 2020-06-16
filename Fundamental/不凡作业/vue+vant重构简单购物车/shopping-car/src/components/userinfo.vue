<template>
  <div>
    <van-cell-group>
      <van-cell title="当前用户：" :value="username" size="large" />
    </van-cell-group>
    <van-button type="primary" block @click="logout">退出登录</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.username = this.$store.state.user;
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      localStorage.removeItem("token");
    }
  }
};
</script>

<style scoped lang="scss">
.info {
  display: flex;
  justify-content: center;
}
</style>
