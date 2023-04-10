<template>
  <div class="main">
    <label for=""><input type="text" placeholder="用户名" :value="form.username"></label>
    <label for=""><input type="password" placeholder="密码" :value="form.password"></label>
    <button @click="btnLogin">登录</button>
  </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";

import { useRouter } from "vue-router";
let form = reactive({
  username: "",
  password: "",
});
const router = useRouter();
let btnLogin = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 300px;
  width: 500px;
  height: 300px;
  border-radius: 15px;
  background-color: pink;
}
input {
  width: 300px;
  height: 40px;
  outline: none;
  margin: 10px;
  border-radius: 8px;
  border: 0;
  padding-left: 15px;
}
button {
  width: 200px;
}
</style>