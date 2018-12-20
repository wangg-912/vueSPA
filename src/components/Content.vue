<template>
  <ul>
    <li v-for="(item, index) in lists" :key="index" @click="goPage(item.id)" v-text="item.title"></li>
  </ul>
</template>

<script>
export default {
  props: {
    // 接收容器组件数据
    lists: {
      default: [],
      type: Array
    }
  }
};
</script>