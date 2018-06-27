import Vue from 'vue'
import Axios from 'axios'
import 'babel-polyfill'

import App from './App'

import router from './router'

Vue.config.productionTip = false
Vue.config.debug = true // 开启debug模式

Vue.prototype.LOADING = false;

// Vue.prototype.BASE_IMG_URL = 'http://192.168.1.107:8080/officialWeb/space/showImg/';
Vue.prototype.BASE_IMG_URL = '/space/showImg/';

/* eslint-disable no-new */
let app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

// app.$Message.config({
//     top: 50,
//     duration: 3
// });

// 响应拦截（配置请求回来的信息）
// Axios.interceptors.response.use(
//     _response => {
//         console.log('_response.data.code = ' + _response.data.code)
//         console.log('_response.data.msg  = ' + _response.data.msg)
//         console.log(_response.data)
//             // 如果jwt无效 跳转登录界面
//         if (_response.data.code == -10000) router.push({ path: '/login' })
//         return _response
//     },
//     _error => {
//         console.log(_error)
//             iview_app.$Message.destroy()
//             iview_app.$Message.error({
//               content: 'Server Error',
//               duration: 3
//             })
//         return Promise.reject(_error)
//     })