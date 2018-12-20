<style scoped>
ul,
li {
  margin: 0;
  padding: 0 20px 0 20px;
  text-decoration: none;
}
.blog-item {
  text-align: left;
  background-color: dodgerblue;
  color: aliceblue;
  margin: 1px;
  font-size: 0.8rem;
  border-radius: 4px;
}
</style>

<template>
  <div>
    <h5>博客标题-vuex示例</h5>
    <div :style="{'line-height':'20px'}">{{this.title}}</div>
    <h5>博客列表</h5>
    <ul>
      <li v-for="(item, index) in lists" :key="item.id" class="blog-item">
        <span>第{{index}}条 &nbsp;&nbsp;</span>
        <span>{{item.text}}</span>
        <span>-完成状态{{item.done ? '已发布':'未发布'}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    lists: Array
  },
  data() {
    return {};
  }
};
</script>

