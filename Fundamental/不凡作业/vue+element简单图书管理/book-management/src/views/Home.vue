<template>
  <div class="home">
    <h1>图书首页</h1>
    <ul class="booklist">
      <li class="book" v-for="item in list" :key="item.id">
        <div class="inner">
          <img :src="item.imgSrc" alt="">
          <p class="title">{{item.name}}</p>
          <p class="id">{{item.id}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null
    }
  },
  created() {
    this.list = this.$store.state.books.booklist;
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;

  h1 {
    font-size: 25px;
    font-weight: bolder;
  }

  .booklist {
    width: 80%;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;

    .book {
      width: 20%;
      padding: 10px;
      box-sizing: border-box;

      .inner {
        border: 1px solid #ebeef5;
        border-radius: 5px;
        transition: all .4s ease;
        &:hover {
          box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
        }

        img {
          width: 100%;
          margin-bottom: 20px;
          border-radius: 5px 5px 0 0;
        }

        .title {
          margin-bottom: 10px;
        }

        .id {
          margin-bottom: 25px;
          color: #3a8ee6;
        }
      }

    }
  }
}
</style>
