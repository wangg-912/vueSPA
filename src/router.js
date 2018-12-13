import Vue from 'vue'
import Router from 'vue-router'
// 引入 Home 组件
const Home = () => import('@v/Home.vue');

// 引入 About 组件
const About = () => import('@v/About.vue');

Vue.use(Router)

let base = `${process.env.BASE_URL}` // 动态获取二级目录

export default new Router({
  mode: 'history',
  base: base,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: About
  }]
})