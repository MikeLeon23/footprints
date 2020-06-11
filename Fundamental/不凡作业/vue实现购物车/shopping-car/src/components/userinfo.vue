<template>
    <div>
        <div class="info">
            <p>当前用户：</p>
            <p>{{username}}</p>
        </div>
        <button @click="logout">退出登录</button>
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
    mounted() {
        this.username = this.$store.state.user;
    },
    methods: {
        logout(){
            this.$store.commit("logout");
            localStorage.removeItem("token");
        }
    },
};
</script>

<style scoped lang="scss">
.info {
    display: flex;
    justify-content: center;
}
</style>
