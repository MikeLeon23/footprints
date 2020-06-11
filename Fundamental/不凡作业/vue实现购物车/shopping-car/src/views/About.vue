<template>
  <div class="about">
    <userinfo v-if="logged"></userinfo>
    <login v-else></login>
  </div>
</template>

<script>
import login from "@/components/login"
import userinfo from "@/components/userinfo"

export default {
    data() {
        return {
        };
    },
    components: {
      login,
      userinfo
    },
    computed: {
      logged(){
        return this.$store.state.user ? true : false;
      }
    },
    created() {
    },
    methods: {

    },
};
</script>

<style scoped lang="scss">

</style>
