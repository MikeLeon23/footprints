<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <router-link :to="`/info/${item.id}`">
        {{item.name}}
      </router-link>
    </li>
    <!-- <div v-for="item in list" :key="item.id">{{item.name}}</div> -->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "白酒",
          id: 1
        },
        {
          name: "红酒",
          id: 2
        },
        {
          name: "葡萄酒",
          id: 3
        }
      ]
    };
  },
  created(){
    console.log(1);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
