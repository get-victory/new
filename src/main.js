import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// axios 配置,将axios挂在到vue实例上，所有原型实例可以共享
Vue.prototype.$axios = axios
// 配置基准地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 配置axios请求拦截器
axios.interceptors.request.use(function (config) {
  // 拦截每次请求，携带token
  config.headers.Authorization = localStorage.getItem('token')
  return config
},
// 对错误做些处理
function (error) {
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function (response) {
  response = response.data
  // 对响应统一拦截，若返回401，说明token无效或过期，返回到登录页
  if (response.meta.status === 401) {
    response.meta.msg = '你好，你的令牌已过期，请重新登录'
    // 去除过期的token
    localStorage.removeItem('token')
    router.push('/login')
  }
  return response
}, function (error) {
  // 对错误信息进行处理
  return Promise.reject(error)
})
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
