<template>
  <div class="books">
    <!-- 顶部筛选id表单 -->
    <el-form :inline="true" :model="formInline" class="form-inline">
      <el-form-item label="请输入需要查询的商品id">
        <el-input v-model="formInline.id" placeholder="商品id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 图书表格 -->
    <el-table class="book-list" :data="tableDataOnDisplay" border stripe @row-dblclick="handleEdit">
      <el-table-column prop="id" label="图书id"> </el-table-column>
      <el-table-column prop="name" label="书名"> </el-table-column>
    </el-table>
    <!-- 点击图书表格时出现的编辑对话框 -->
    <el-dialog title="提示" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="请输入图书名称" prop="name">
          <el-input type="text" v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入图书简介" prop="description">
          <el-input type="textarea" :rows="5" v-model="form.desc" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        id: ""
      },
      tableData: Array,   // 从store里面获得的图书数组
      tableDataOnDisplay: Array,    // 展示在页面中的图书数组（查询操作）
      dialogFormVisible: false,
      form: {
        name: '',
        desc: '',
        id: ''
      }
    };
  },
  computed: {

  },
  created() {
    this.tableData = this.$store.state.books.booklist;
    this.tableDataOnDisplay = this.tableData;
  },
  methods: {
    // 点击查询按钮的事件处理函数
    onSubmit() {
      if(this.formInline.id === ""){
        this.tableDataOnDisplay = this.tableData;
      }else{
        this.tableDataOnDisplay = this.tableData.filter(item => item.id.includes(this.formInline.id));
      }
    },
    // 点击列表中的任一行触发的事件处理函数
    handleEdit(row, obj, event) {
      this.form.name = row.name;
      this.form.desc = row.description;
      this.form.id = row.id;
      this.dialogFormVisible = true;
    },
    // 对话框中编辑图书后提交的事件处理函数
    editSubmit() {
      this.$store.commit("update", this.form);
      this.dialogFormVisible = false;
      this.$message({
        message: '修改成功！',
        type: 'success'
      });
    }
  }
};
</script>

<style scoped lang="scss">
.books {
  width: 800px;
  margin: 0 auto;

  .form-inline {
    width: 60%;
  }
}
</style>
