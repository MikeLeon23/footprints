<template>
    <div>
        请输入用户名:<input type="text" v-model="username"><br>
        请输入密码:<input type="password" name="" id=""><br>
        <button @click="handleSubmit">提交</button>
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
        handleSubmit(){
            localStorage.setItem("token", this.username);
            alert("登录成功，跳转到user页面");
            this.$router.push("/user");
        }
    },
};
</script>

<style scoped lang="scss">

</style>
