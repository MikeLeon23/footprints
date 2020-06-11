<template>
    <div>
        请输入名称: <input type="text" v-model="username"><br>
        请输入密码: <input type="password" name="" id=""><br>
        <div class="login" @click="login">
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: ""
        };
    },
    computed: {

    },
    created() {

    },
    methods: {
        login(){
            localStorage.setItem("token", this.username);
            this.$store.commit("login", this.username);
        }
    },
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
