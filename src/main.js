import Vue from 'vue'
import $loading from 'gang-wang-loading'
import App from './App.vue'
import router from './router'
import '@x/api'
Vue.config.productionTip = false
Vue.use($loading);

// 如果是非线上环境，加载 VConsole
if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole/dist/vconsole.min.js');
  new VConsole();
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')