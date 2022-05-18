<template>
  <div class="login">
    <div class="title_container">
      <h3>后台管理系统</h3>
      <div class="tips">
        <span>账号：xxxxx</span>
        <span>密码：</span>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name" prefix-icon="el-icon-date"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
     
    }
  }
</script>

<style scoped>
@import "../../styles/common.css";
.login {
  background-color: cadetblue;
  height: 100%;
}
.title_container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 450px;
  height: 300px;
  background-color: #fff;
}
.title_container h3 {
  text-align: center;
  font-size: 30px;
}
</style>
