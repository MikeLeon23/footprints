<template>
  <div class="home">
    <goods
      v-for="item in list"
      :key="item.id"
      :img="item.imgSrc"
      :title="item.title"
      :id="item.id"
      @update-display="updateDisplayObj"
    ></goods>
    <masks
      v-if="showMask"
      :img="displayObj.imgSrc"
      :title="displayObj.title"
      :descri="displayObj.descri"
      :show.sync="showMask"
      @update-goods="updateGoods"
      @delete-item="deleteItem"
    ></masks>
  </div>
</template>

<script>
import mockjs from "mockjs"
import goods from "@/components/goods.vue"
import masks from "@/components/masks.vue"

var Random = mockjs.Random;

export default {
  name: "Home",
  data(){
    return {
      list: [],
      showMask: false,
      displayObj: {}
    }
  },
  components: {
    goods,
    masks
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < 5; i++) {
        let item = {
          id: Random.guid(),
          imgSrc: Random.dataImage("200x100"),
          title: Random.ctitle(),
          descri: Random.cparagraph()
        };
        this.list.push(item);
      }
    },
    updateDisplayObj(val) {
      this.displayObj = this.list.find(item => item.id === val);
      this.showMask = true;
    },
    updateGoods(title, descri) {
      let item = this.list.find(item => item.id === this.displayObj.id);
      item.title = title;
      item.descri = descri;
      this.showMask = false;
    },
    deleteItem() {
      let index = this.list.findIndex(item => item.id === this.displayObj.id);
      this.list.splice(index, 1);
      this.showMask = false;
    }
  }
};
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  .home {
    width: 700px;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
  }
</style>
