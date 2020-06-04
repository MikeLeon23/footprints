<template>
  <div class="masks" @click.self="hideMask">
    <div class="box">
      <img :src="img" alt="" />
      <div v-if="!onEdit">
        <p class="title">{{ title }}</p>
        <p class="description">{{ descri }}</p>
        <button @click="edit">编辑</button>
        <button @click="del">删除</button>
      </div>
      <div v-else>
        <input class="title-edit" type="text" name="" id="" :value="title" />
        <textarea
          class="description-edit"
          name=""
          id=""
          cols="30"
          rows="10"
          :value="descri"
        ></textarea>
        <br /><button @click="save">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "masks",
  props: ["img", "title", "descri"],
  data() {
    return {
      onEdit: false
    };
  },
  methods: {
    edit() {
      this.onEdit = true;
    },
    save() {
      let title = document.getElementsByClassName("title-edit")[0].value;
      let descri = document.getElementsByClassName("description-edit")[0].value;
      this.$emit("update-goods", title, descri);
    },
    del() {
      this.$emit("delete-item");
    },
    hideMask() {
      this.$emit("update:show", false);
    }
  }
};
</script>

<style lang="scss" scoped>
  .masks {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
  }

  .masks .box {
    width: 300px;
    height: 350px;
    padding: 20px;
    margin: auto;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
  }

  .box .title {
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
  }

  .box .title-edit {
    margin: 10px 0;
  }

  .box .description {
    text-align: left;
    margin-bottom: 10px;
  }

  .box .description-edit {
    margin-bottom: 10px;
  }

  .box button {
    margin: 0 10px;
  }
</style>