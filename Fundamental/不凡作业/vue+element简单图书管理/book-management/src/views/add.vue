<template>
    <div class="main">
      <h2>注意 添加图书的时候默认使用mockjs生成了对应的图片</h2>
      <!-- 表单，添加图书 -->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="ruleForm">
        <el-form-item label="请输入图书名称" prop="name">
          <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="请输入图书简介" prop="description">
          <el-input type="textarea" :rows="5" v-model="ruleForm.description" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
import mockjs from 'mockjs'
const Random = mockjs.Random;

export default {
    data() {
      // 图书名称验证函数
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入图书名称'));
        } else {
          callback();
        }
      };
      // 图书简介验证函数
      var validateDescription = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入图书简介'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          description: '',
        },
        // 表单验证规则
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          description: [
            { validator: validateDescription, trigger: 'blur' }
          ]
        }
      };
    },
    computed: {

    },
    created() {

    },
    methods: {
      // 表单提交事件处理函数
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let newBook = {
              id: Random.id(),
              name: this.ruleForm.name,
              description: this.ruleForm.description,
              imgSrc: Random.dataImage("200x100", "图书")
            };
            this.$store.state.books.booklist.push(newBook);
            this.$message({
              message: '添加成功！',
              type: 'success'
            });
            this.resetForm(formName);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    font-size: 25px;
    font-weight: bolder;
    margin: 20px 0;
  }
  .ruleForm {
    width: 50%;
  }
}
</style>
