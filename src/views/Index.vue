<template>
  <div class="container">
    <nav class="container-left">
      <header>
        <i class="header-ico"></i>
      </header>
      <nav-left />
    </nav>
    <main>
      <MainHeader></MainHeader>
      <section class="main-content">
        <div class="nav-title">
          <span v-for="item in routeName" :key="item.index">{{ item }}</span>
        </div>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import NavLeft from "@/components/Index/NavLeft.vue";
import MainHeader from "../components/Index/MainHeader.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

const nameMapLabel: any = {
  DetectionStatisticsList:['一级菜单一'],
  DetectionTaskList:['二级菜单一'],
  PositiveManagementList:['二级菜单二'],
};
const route = useRoute();
let routeName = ref<string[]>(nameMapLabel[route.name as string] || []);
watch(route, (cRoute) => {
  routeName.value = nameMapLabel[cRoute.name as string] || [];
  console.log(routeName.value)
});
</script>
<style scoped>
.container {
  padding-left: 180px;
  position: relative;
  height: 100vh;
  background: #f3f3f5;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 1280px;
  box-sizing: border-box;
}

.container > nav {
  width: 180px;
  height: 100%;
  background: linear-gradient(180deg, #0930f9 0%, #37a2f2 100%);
  position: absolute;
  left: 0;
  top: 0;
}

.container-left > header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-ico {
  width: 103px;
  height: 28px;
  background-color: red;
}

.main-content {
  padding: 40px 20px 0 20px;
  position: relative;
}

.nav-title {
  position: absolute;
  top: 14px;
  left: 20px;
  line-height: 12px;
}

.nav-title > span {
  font-size: 12px;
  font-weight: 400;
  padding-right: 8px;
  line-height: 12px;
}

.nav-title > span:not(:last-child) {
  color: #999;
}

.main-content > span:last-child {
  color: #666666;
}
</style>