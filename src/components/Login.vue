<template>
  <div class="login">
    <el-form status-icon label-width="80px" :model="form" ref="form" :rules="rules">
      <img src="../assets/avatar.jpg" alt="" class="logo">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" v-model="form.password" type="password"></el-input>
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
    ResetForm () {
      // 获取到form组件，调用组件的重置方法
      this.$refs.form.resetFields()
    },
    async Loginbtn () {
      // 先进行校验，再发送请求
      try {
        // 先校验，再发送请求
        await this.$refs.form.validate()
        // 解构
        const { meta, data } = await this.$axios.post('login', this.form)
        if (meta.status === 200) {
          // 登录成功，先存储token令牌
          localStorage.getItem('token', data.token)
          this.$message({
            message: meta.msg,
            type: 'success',
            duration: 1000
          })
          // 登录成功，要跳转到首页
          this.$router.push({ name: 'index' })
        } else {
          this.$message.error(meta.msg)
        }
      } catch (e) {
        console.log(e)
      }
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
