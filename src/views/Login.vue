<template>
  <div class="container">
    <div @click="login">登录</div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "permissionList",
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.replace("/");
    },
  },

  watch: {},
  created() {
  },
});
</script>
<style scoped>
.container {
  box-sizing: border-box;
  padding-left: 31%;
  position: relative;
  height: 100vh;
  font-size: 38px;
  cursor: pointer;
}
</style>