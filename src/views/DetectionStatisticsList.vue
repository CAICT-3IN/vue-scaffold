<template>
  <div class="org-box">
    <div class="mesModule">一级菜单一</div>
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "permissionList",
  data() {
    return {

    };
  },
  methods: {
  },

  watch: {
  },
  created() {
  },
});
</script>

<style scoped>
.mesModule {
  padding: 20px;
  height: calc(100vh - 160px);
  background-color: #fff;
  border-radius: 12px 12px 0px 0px;
  overflow: hidden;
}
</style>