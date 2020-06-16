<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="username"
        required
        label="用户名"
        placeholder="请输入用户名"
      />
      <van-field
        type="password"
        required
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button type="primary" block @click="login">登录</van-button>
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
  methods: {
    login() {
      localStorage.setItem("token", this.username);
      this.$store.commit("login", this.username);
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 50px;
  background-color: green;
  display: flex;
  cursor: pointer;

  span {
    margin: auto;
    color: #fff;
  }
}
</style>
