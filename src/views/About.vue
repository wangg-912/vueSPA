<template>
  <div class="about">
    <template>
      <div slot="filters">
        <input type="text" v-model="str1">
        <input type="text" v-model="str2">
        <div>{{ str1|toUpperCase}}</div>
        <div>{{ str2|toUpperCase }}</div>
      </div>
    </template>
  </div>
</template>
<script>
import Filters from "@@/Filters.vue";
export default {
  data() {
    return {
      str1: "",
      str2: ""
    };
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase();
    }
  },
  created() {
    this.showLoading();
    this.testApi();
  },
  methods: {
    showLoading: function() {
      /* this.$loading.show("我是王小小！"); */
    },
    testApi() {
      this.$axios
        .get("/api/xx")
        .then(function(res) {})
        .catch(function(err) {});
    }
  }
};
</script>

