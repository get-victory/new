<template>
  <el-container class="index">
    <!-- 顶部 -->
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="title">
        <h1>商城后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎光临~<a href="javascript:;" @click="Logout">退出</a>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width='200px'>
        <el-menu
          router
          :default-active="defaultActive"
          background-color="#545c64"
          text-color="#fff"
          unique-opened
          active-text-color="#ffd04b"
        >
          <el-submenu :index='menu.path' v-for="menu in menuList" :key="menu.id">
            <!-- 标题 -->
            <template v-slot:title>
              <i class="el-icon-menu"></i>
              <span>{{ menu.authName }}</span>
            </template>
            <!-- 展开的内容 -->
            <el-menu-item :index='item.path' v-for="item in menu.children" :key="item.id">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.authName }}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    defaultActive () {
      return this.$router.path.slice(1).split('-')[0]
    }
  },
  async created () {
    const { data, meta } = await this.$axios.get('menus')
    if (meta.status === 200) {
      this.menuList = data
    } else {
      this.$message.error(meta.msg)
    }
  },
  methods: {
  /* 右上角退出按钮,确定退出走then */
    Logout () {
      /* 退出前先询问下，，， */
      this.$confirm('亲，确定要退出吗？', '消息提示', {
        type: 'warning'
      }).then(() => {
        // 退出登录，清除token,并跳转到登录页
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.index{
  height: 100%;
  .el-header{
    background-color: #d8d8d8;
    display: flex;
    .logo{
      width: 180px;
      img{
        width: 60px;
        height: 60px;
      }
    }
    .title{
      flex: 1;
      text-align: center;
      h1{
        height: 60px;
        line-height: 60px;
      }
    }
    .logout{
      width: 180px;
      text-align: right;
      height: 60px;
      line-height: 60px;
      font-weight: 700;
      a{
        color:blueviolet
      }
    }
  }
  .el-aside{
    background-color: #545c64;
    .el-menu{
      border: none;
    }
  }
}
</style>
