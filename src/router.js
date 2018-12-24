import Vue from 'vue'
import Router from 'vue-router'
// 引入 Home 组件
/* const Home = () => import('@v/Home.vue'); */
import Home from '@v/Home.vue'
// 引入 Blog 组件
import Blog from '@v/Blog.vue'
// 引入 About 组件
import About from '@v/About.vue'
import Puzzles from '@@/datas/DataView.vue'


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
  }, {
    path: '/blog',
    name: 'blog',
    component: Blog,
    meta: {
      title: '博客'
    }
  }, {
    path: '/puzzles',
    name: 'puzzles',
    component: Puzzles,
    meta: {
      title: '数据驱动'
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