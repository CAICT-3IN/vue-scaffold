<template>
  <el-config-provider>
    <router-view></router-view>
  </el-config-provider>
</template>


<script lang="ts">

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  --el-color-primary: #276efa;
  --el-border-radius-base: 0
}

.el-popper {
  --el-color-primary: #276efa;
}

.card {
  border-radius: 12px 12px 0 0;
  background-color: white;
  padding: 20px;
}

.demonstration {
  display: block;
  color: #595959;
  font-size: 12px;
  margin-bottom: 6px;
  text-align: left;
}

.ed-required {
  color: #F56C6C;
}

.el-cascader-node {
  position: relative;
}

.el-cascader-node .el-radio {
  position: unset;
}

.el-cascader-node .el-radio::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
