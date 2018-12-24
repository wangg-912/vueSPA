<style scoped>
.data-wrap {
  width: 328px;
  height: 328px;
  padding: 0;
  margin: 50px auto 0;
  background: #ccc;
  list-style: none;
}
.puzzle {
  float: left;
  width: 80px;
  height: 80px;
  font-size: 20px;
  background: #1890ff;
  text-align: center;
  line-height: 80px;
  border: 1px solid #ccc;
  cursor: pointer;
  color: antiquewhite;
}
.puzzle-empty {
  background: #ccc;
  box-shadow: inset 2px 2px 18px;
}
.btn-reset {
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 20px auto 0;
  text-align: center;
  border-radius: 5px;
  border: none;
  background: #ccc;
}
</style>
<template>
  <div class="box">
    <ul class="data-wrap">
      <li
        :class="{'puzzle': true, 'puzzle-empty': !puzzle}"
        v-for="(puzzle, index) in lists"
        :key="index"
        v-text="puzzle"
        @click="moveFn(index)"
      ></li>
    </ul>
    <button class="btn-reset" @click="renderFn">重置游戏</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  mounted() {
    this.renderFn();
  },
  methods: {
    renderFn() {
      /* 生成1-15的顺序数字 */
      let listsArr = Array.from({ length: 15 }, (value, index) => index + 1);
      this.lists = listsArr.sort(() => {
        return Math.random() - 0.5;
      });
      this.lists = this.shuffle(listsArr);
      this.lists.push("");
    },
    /* 随机调整1-15之间的顺序 */
    shuffle(arr) {
      let len = arr.length;
      for (let i = 0; i < len - 1; i++) {
        let idx = Math.floor(Math.random() * (len - i));
        let temp = arr[idx];
        arr[idx] = arr[len - i - 1];
        arr[len - i - 1] = temp;
      }
      return arr;
    },
    /* 点击方块的移动操作 */
    moveFn(index) {
      let lists = this.lists;
      // 获取点击位置上下左右的值
      let leftNum = this.lists[index - 1],
        rightNum = this.lists[index + 1],
        topNum = this.lists[index - 4],
        bottomNum = this.lists[index + 4];
      // 和为空的位置交换数值
      if (leftNum === "" && index % 4) {
        this.setPuzzle(index, -1);
      } else if (rightNum === "" && 3 !== index % 4) {
        this.setPuzzle(index, 1);
      } else if (topNum === "") {
        this.setPuzzle(index, -4);
      } else if (bottomNum === "") {
        this.setPuzzle(index, 4);
      }
      this.passFn();
    },
    /* 设置变更后的位置 */
    setPuzzle(index, num) {
      let curNum = this.lists[index];
      this.lists[index + num] = curNum;
      this.lists[index] = "";
      //this.$forceUpdate()
      this.$set(this.lists, index + num, curNum);
      this.$set(this.lists, index, "");
    },
    /* 校验游戏通过 */
    passFn() {
      if (this.lists[15] === "") {
        const newlists = this.lists.slice(0, 15);
        const isPass = newlists.every((e, i) => e === i + 1);

        if (isPass) {
          alert("恭喜，闯关成功！");
        }
      }
    }
  }
};
</script>
