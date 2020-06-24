<template>
  <div class="tab-control">
    <div class="tab-control-item" 
      v-for="(item, index) in titles" 
      :class="{active: index === activeIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.activeIndex = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .tab-control {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    background-color: #fff;
    display: flex;

    .tab-control-item {
      flex: 1;

      &.active {
        color: var(--color-high-text);

        span {
          padding: 5px;
          border-bottom: 3px solid var(--color-tint);
        }
      }
    }
  }
</style>
