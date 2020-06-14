<template>
  <div class="manage">
    <div class="tab">
      <router-link to="/manage/add">添加图书</router-link> |
      <router-link to="/manage/edit">修改图书</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.tab {
  margin-bottom: 10px;
}
</style>
