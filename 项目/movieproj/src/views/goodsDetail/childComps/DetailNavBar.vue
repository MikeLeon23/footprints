<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="back">
        <img src="@/assets/image/common/back.svg" alt="">
      </div>
      <div slot="mid" class="mid">
        <div v-for="(item, index) in titles" 
        class="mid-item" @click="itemClick(index)" 
        :class="{active: index === activeIndex}">
          <span>{{item}}</span>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        activeIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      back() {
        this.$router.back();
      },
      itemClick(index) {
        this.activeIndex = index;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .left {
    display: flex;
    height: 44px;
    img {
      margin: auto;
    }
  }
  .mid {
    display: flex;
    font-size: 13px;
    
    .mid-item {
      flex: 1;
    }

    .active {
      color: var(--color-high-text);
    }
  }
</style>
