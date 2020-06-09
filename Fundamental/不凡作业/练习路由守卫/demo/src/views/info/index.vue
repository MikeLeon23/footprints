<template>
    <div>
        这是详情页，商品ID为{{id}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: null
        };
    },
    computed: {

    },
    created() {
        this.id = this.$route.params.id;
    },
    // beforeRouteUpdate(to, from, next){
    //     this.id = to.params.id;
    //     next();
    // },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
