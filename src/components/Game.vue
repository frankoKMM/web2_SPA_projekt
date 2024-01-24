<script>
import { useRecordStore } from "../stores/record.js";

export default {
  data() {
    return {
      time: 0,
      result: 0,
      startTime: null
    };
  },
  computed: {
    isGameOver: function () {
      return this.result === 5;
    },
  },
  methods: {
    checkResult() {
      if (this.result === 5)
        this.time =Math.floor((Date.now() - this.startTime) / 1000) ;

      const store = useRecordStore();

      if (store.record > this.time)
        this.store.setNewRecord(this.time);
    },
  },
  mounted() {
    this.startTime = Date.now();
  }
};
</script>

<template>
  <div v-if="isGameOver">
    <h2>You solved the equation!</h2>
    <h3>Time elapsed: {{time}} seconds.</h3>
  </div>
  <div>
    <h3>Solve the following equation:</h3>
    <strong>-3x + 26 = 11</strong>
    <br>
    <input
      type="number"
      placeholder="x=?"
      v-model.number="result"
      @keyup="checkResult"
    >
  </div>
</template>

<style scoped>
div {
  border: 1px gray solid;
  border-radius: 3px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 10px;
  margin: 5px;
  background-color: aquamarine;
}
</style>