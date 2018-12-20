import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /* 我们要把我们需要做状态管理的量放到这里来， 然后在后面的操作动它 */
  state: {
    bolgTitle: 'zhangsan的博客',
    views: 0,
    blogNumber: 1,
    total: 0,
    todos: [{
        id: 1,
        done: true,
        text: '我是码农'
      },
      {
        id: 2,
        done: false,
        text: '我是码农202号'
      },
      {
        id: 3,
        done: true,
        text: '我是码农202号'
      }
    ]
  },
  /* 更改状态管理器的 store 中的状态的唯一方法是提交 mutation */
  mutations: {
    addViews(state) {
      state.views++;
    },
    addBlogs(state) {
      state.blogNumber++;
    },
    setTotals(state) {
      state.total++;
    }

  },
  /* action 的作用跟mutation的作用是很相似的， 它提交mutation，不能直接改变状态，可以包含任意异步操作 */
  actions: {
    addViews({
      commit
    }) {
      commit('addViews')
    },
    clickTotal({
      commit
    }) {
      commit('setTotals')
    },
    blogAdd({
      commit
    }) {
      commit('addBlogs')
    }
  },
  /* 过滤状态数据并针对状态数据的操作*/
  getters: {
    getToDo(state) {
      return state.todos.filter(item => item.done === true) /* filter 迭代过滤器 将每个item的值 item.done == true 挑出来， 返回的是一个数组 */
    }
  },
})