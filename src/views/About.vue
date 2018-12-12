<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.testApi();
  },
  methods: {
    testApi() {
      this.$axios
        .get("/platform/common/item/tree/gugu")
        .then(function(res) {
          debugger;
        })
        .catch(function(err) {});
    }
  }
};
</script>

