<style>
h5 {
  margin: 0;
  padding: 0;
  line-height: 26px;
  text-align: left;
  text-indent: 20px;
}
</style>
<template>
  <div class="blog">
    <Head :title="this.$store.state.bolgTitle" :lists="todosALise"></Head>
    <Counts :views="viewsCount" :bnumber="blogCount"></Counts>
    <Attention :totals="this.$store.state.total" @count="totalAlise"></Attention>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import Head from "@@/blogs/Head";
import Counts from "@@/blogs/Count.vue";
import Attention from "@@/blogs/AttentionRate";
export default {
  data() {
    return {};
  },
  components: { Head, Counts, Attention },
  created() {
    this.viewAdd();
  },
  computed: {
    ...mapState({
      viewsCount: "views",
      blogCount: "blogNumber"
    }),
    ...mapGetters({
      todosALise: "getToDo"
    })
  },
  methods: {
    ...mapMutations({
      totalAlise: "setTotals"
    }),
    ...mapActions({
      viewAdd: "addViews"
    })
  }
};
</script>
