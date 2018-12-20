<template>
  <div>
    <h5>博客关注度</h5>
    <span>
      <strong>关注度：</strong>
      {{this.totals}}
    </span>
    <div>
      <button @click="clickFn">点击增加关注度</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    totals: Number
  },
  data() {
    return {};
  },
  methods: {
    clickFn() {
      this.$emit("count"); // 触发回调
    }
  }
};
</script>

