<template>
  <el-container class="index">
    <!-- 顶部 -->
    <el-header>
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="title">
        <h1>双子婷依商城后台管理系统</h1>
      </div>
      <div class="logout">
        欢迎光临~<a href="javascript:;">退出</a>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
            <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">用户列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item>角色列表</el-menu-item>
          <el-menu-item>权限列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
</el-aside>
      <!-- 主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.index{
  width: 100%;
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
}
</style>
