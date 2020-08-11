<template>
  <div class="login">
    <el-form label-width="80px" :model="form" ref="form" :rules="rules">
      <img src="../assets/avatar.jpg" alt="" class="logo">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
     <el-form-item>
        <el-button @click="Loginbtn"  class="btn" type="primary">登录</el-button>
        <el-button @click="ResetForm">重置</el-button>
     </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入正确的用户名', trigger: ['blur', 'change'] },
          { min: 3, max: 8, message: '长度在 3 到 8个字符', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入正确的密码', trigger: ['blur', 'change'] },
          { min: 6, max: 10, message: '长度在 6 到 10个字符', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    Loginbtn () {

    },
    ResetForm () {
      // 获取到form组件，调用组件的重置方法
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #2d434c;
  .el-form{
    width: 400px;
    padding: 20px;
    padding-top: 70px;
    margin:0 auto;
    margin-top: 200px;
    border-radius: 20px;
    background-color: #fff;
    position: relative;
    .logo{
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -75px;
      border-radius: 50%;
      border: 5px solid #fff;
    }
      .btn{
        margin-right: 70px;
      }
  }
}
</style>
