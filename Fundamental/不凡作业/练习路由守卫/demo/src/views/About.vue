<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{age}}</p>
    <button @click="inc">加</button> 
    <button @click="dec">减</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
          age: null
        };
    },
    computed: {

    },
    created() {
      this.age = this.$store.state.age;
    },
    methods: {
      inc(){
        this.$store.commit("increase", 2);
      }
    },
};
</script>

<style scoped lang="scss">

</style>

