<template>
  <div>
    <h5>博客流量</h5>
    <div>
      <strong>初始化访问量:</strong>
      {{this.views}}
    </div>
    <div>
      <strong>博客数量:</strong>
      {{this.bnumber}}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    views: Number,
    bnumber: Number
  },
  data() {
    return {};
  }
};
</script>

