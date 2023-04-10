<template>
  <div class="main">
    <h1>请选择应用</h1>
    <div class="box" @click="handelClick(1)">应用1</div>
    <div class="box" @click="handelClick(2)">应用2</div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let handelClick = (type) => {
  if (type == 1) {
    router.push({
      path: "/app/app-vue2/#/",
      query: {
        msg: "1",
      },
    });
  } else {
    router.push({
      path: "/app/app-vue3",
      query: {
        msg: "2",
      },
    });
  }
};
</script>
<style lang="scss" scoped>
.main {
  margin: 0 auto;
  width: 800px;
  height: 800px;
}
.box {
  width: 600px;
  cursor: pointer;
  height: 200px;
  background-color: pink;
  border-radius: 18px;
  font-size: 30px;
  line-height: 200px;
  margin: 10px;
}
</style>