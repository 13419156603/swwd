

<template>
  <div>应用1</div>
  <router-view />
</template>
<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
let route = useRoute();
onMounted: {
  let userId = route.query;
  console.log("111", userId);
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
