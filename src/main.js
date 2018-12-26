import Vue from 'vue'
import Vuex from 'vuex'
import $loading from 'gang-wang-loading'
import App from './App.vue'
import router from './router'
import store from './store'
import '@x/api'
Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use($loading);
if (process.env.NODE_ENV !== 'production') {
  Vue.config.performance = true;
}
// 如果是非线上环境，加载 VConsole
if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole/dist/vconsole.min.js');
  new VConsole();
}
/* Vue.config.errorHandler = function (err, vm, info) {
  let {
    message, // 异常信息
    name, // 异常名称
    stack // 异常堆栈信息
  } = err;
}; */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')