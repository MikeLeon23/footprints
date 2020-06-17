<template>
  <div class="home">
    <!-- 顶部查询、添加表单 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="text-align: left">
      <el-form-item label="请输入完整id">
        <el-input v-model="formInline.userID" placeholder="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="createNewUser">添加</el-button>
      </el-form-item>
    </el-form>
    <!-- 中部信息列表 -->
    <el-table :data="tableData" border style="width: 100%" @row-dblclick="editUserInfo">
      <el-table-column prop="userId" label="id" width="270"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="school" label="学校"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
    </el-table>
    <!-- 底部分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="currentLimit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
    <!-- 弹出层，添加用户对话框，嵌套表单 -->
    <el-dialog :title="flag ? '编辑用户' : '添加用户'" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="!flag" label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="学校" :label-width="formLabelWidth">
          <el-input v-model="form.school" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" style="text-align: left">
          <el-radio v-model="form.sex" label="男">男</el-radio>
          <el-radio v-model="form.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" v-if="!flag" class="dialog-footer">
        <el-button @click="attemptCancel">取 消</el-button>
        <el-button type="primary" @click="addConfirm">提 交</el-button>
      </div>
      <div slot="footer" v-else class="dialog-footer">
        <el-button @click="editConfirm">修 改</el-button>
        <el-button type="primary" @click="deleteUser">删 除</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {request} from '../api/network/request.js'

export default {
  data() {
    return {
      // 列表数组
      tableData: [],
      currentPage: 1,
      currentLimit: 5,
      // 查询表单数据
      formInline: {
        userID: ""
      },
      // 弹出对话框表单数据
      dialogFormVisible: false,
      flag: 0,  // 控制弹窗是添加用户还是编辑用户，0-添加， 1-编辑
      form: {
        username: '',
        password: '',
        address: '',
        school: '',
        sex: '',
        name: '',
        age: '',
        avatar: '',
        tel: '123'
      },
      userId: '',
      formLabelWidth: '60px'
    };
  },
  methods: {
    // 拉去用户列表的函数
    getData() {
      request({
        url: '/list',
        params: {
          start: this.currentPage,
          limit: this.currentLimit
        }
      }).then(res => {
        this.tableData = res.data.data.list;
      }, err => {
        console.log(err);
      })
    },
    // 点击查询按钮
    onSubmit() {
      console.log("submit!");
      request({
        url: '/detail',
        params: {
          id: this.formInline.userID
        }
      }).then(res => {
        console.log(res);
        this.tableData = [res.data.data];
      }, err => {
        console.log(err);
      })
    },

    // 添加新用户
    createNewUser() {
      this.flag = 0;
      this.attemptCancel();
      this.dialogFormVisible = true;
    },
    attemptCancel() {
      this.dialogFormVisible = false;
      for (let i in this.form) {
        this.form[i] = ''
      }
    },
    addConfirm() {
      // 先验证用户名不重复，然后添加用户信息
      request({
        method: 'post',
        url: '/checkUserName',
        data: {
          username: this.form.username
        }
      }).then(res => {
        if (res.data.code ==  "fail") {
          alert("用户名重复");
        }else{
          return request({
            method: 'post',
            url: '/save',
            data: this.form
          })
        }
      }).then(res => {
        this.getData();
        this.attemptCancel();
      }, err => {
        console.log(err);
      })
    },

    // 编辑用户信息
    editUserInfo(row) {
      this.flag = 1;
      for (let i in this.form) {
        this.form[i] = row[i];
      }
      this.userId = row.userId;
      this.dialogFormVisible = true;
    },
    editConfirm() {
      request({
        method: 'post',
        url: '/updateUserInfo',
        data: {
          ...this.form,
          userId: this.userId
        }
      }).then(res => {
        this.getData();
        this.attemptCancel();
      }, err => {
        console.log(err);
      })
    },
    deleteUser() {
      request({
        url: '/del',
        params: {
          id: this.userId
        }
      }).then(res => {
        this.getData();
        this.attemptCancel();
        if (res.data.code === "success") {
          alert("用户已删除");
        }
      }, err => {
        console.log(err);
      })
    },
    // 改变每页显示数据条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentLimit = val;
      this.getData();
    },
    // 改变当前所处页数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
</style>
