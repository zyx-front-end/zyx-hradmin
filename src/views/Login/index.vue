<template>
  <div class="login">
    <div class="title_container">
      <h3>后台管理系统</h3>
      <div class="tips">
        <span>账号：xxxxx</span>
        <span>密码：</span>
        <el-form
          :model="ruleForm"
          :rules="loginrules"
          ref="loginref"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="手机号码" prop="mobile">
            <el-input
              v-model="ruleForm.mobile"
              prefix-icon="el-icon-date"
            ></el-input>
          </el-form-item>
          <el-form-item label="注册密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginref')">立即创建</el-button>
            <el-button @click="resetForm('loginref')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  //自定义校验函数
  const checkMobile = function(rule,value,callback){
    value.charAt(2) === "9"
      ? callback()
      :callback(new Error('手机号第三位必须是9'))
  }  
    return {
      ruleForm: {
        mobile: "",
        password: "",
      },
      loginrules: {
        mobile: [
          { required: true, message: "手机号不能为空！", trigger: "blur" },
          {
            pattern: /^1[3,4,5,6,7,8,9]\d{9}$/,
            message: "手机格式不正确",
            trigger: "blur",
          },
          {
            validator:checkMobile,
            trigger:'blur'
          }
        ],
        password: [
          { required: true, message: "密码不能为空！", trigger: "blur" },
          { min:6,max:10, message: "密码为6-10位长度的字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName){
      //$refs获取到form表单
      // this.$refs[formName].validate((valid)=>{
      //   if(valid){
      //     alert('submit')
      //     console.log('提交成功！')
      //   }else{
      //     console.log('error submit')
      //     return false
      //   }
      // })
      this.$refs[formName].validate().then(()=>{
        console.log('成功')
      }).catch(()=>{
        console.log('失败')
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
    }
  },
};
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
