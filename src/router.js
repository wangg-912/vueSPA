import Vue from 'vue'
import Router from 'vue-router'
// 引入 Home 组件
const Home = () => import('@v/Home.vue');

// 引入 About 组件
const About = () => import('@v/About.vue');

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }, {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于我们'
    }
  }]
})
router.beforeEach((to, from, next) => {
  let title = to.meta && to.meta.title;
  if (title) {
    document.title = title; // 设置页面 title
  }
  (!to.name) ? next({
    name: 'home'
  }): next();
})
export default router