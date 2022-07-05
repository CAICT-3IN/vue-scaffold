<template>
  <ul class="nav-box">
   <el-menu
        class="nav-list"
        :default-active="router.currentRoute.value.name"
        text-color="#ffffff"
        background-color="transparent"
      >
         <div  v-for="item in navList"  :key="item.target" class="child-list">
           <!-- 有子菜单 -->
          <el-sub-menu :index="item.target" v-if="item.children" class="child-sub">
          <template #title>
             <i class="icon icon-search iconfont waringIco" :class="item.icon"></i>
            <span class="pl10">{{ item.label }}</span>
          </template>
          <el-menu-item v-for="childItem in item.children" :key="childItem.target" :index="childItem.target"  @click="hanldeChange(childItem)">
            <span class="pl10">{{ childItem.label }}</span>
          </el-menu-item>
        </el-sub-menu>
         <!-- 无菜单 -->
        <el-menu-item :index="item.target" v-else  @click="hanldeChange(item)">
           <i class="icon icon-search iconfont waringIco" :class="item.icon"></i>
          <span class="pl10">{{ item.label }}</span>
        </el-menu-item>
         </div>
      </el-menu>
  </ul>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { watch, ref, Ref } from "vue";
const router = useRouter();
const route = useRoute();
interface NavItem {
  icon: string;
  label: string;
  target: string;
  children:any;
}
const navList: NavItem[] = [

  {
    icon: "icon-menuDetectionStatistics",
    label: "一级菜单1",
    target: "DetectionStatisticsList",
    children:null,
  },
  {
    icon: "icon-menuDetectionManagement",
    label: "一级菜单二",
    target: "DetectionManagement",
    children: [
      {
        icon: "icon-ycdmenuJcgl",
        label: "二级菜单一",
        target: "DetectionTaskList",
      },
       {
        icon: "icon-ycdmenuJcgl",
        label: "二级菜单二",
        target: "PositiveManagementList",
      },
    ],
  },
];

const navMap: Record<string, number> = navList.reduce(
  (result: any, item: NavItem, index) => {
    return {
      ...result,
      [item.target]: index,
    };
  },
  {}
);

const activeIndex = getCurrentActive();

function getCurrentActive(): Ref<number> {
  const activeIndex = ref<number>(0);
  console.log("navMap",navMap)
  if (navMap[route.name as string] !== undefined) {
    activeIndex.value = navMap[route.name as string];
  } else {
    activeIndex.value = navMap[(route.meta?.nav as any) || "Home"];
  }
  watch(route, (val) => {
    if (navMap[route.name as string] !== undefined) {
      activeIndex.value = navMap[route.name as string];
    } else {
      activeIndex.value = navMap[(route.meta?.nav as any) || "Home"];
    }
  });
  return activeIndex || 0;
}

function hanldeChange(active: NavItem) {
  router.push({
    name: active.target,
  });
}
</script>
<style scoped>
.el-menu {
  border-right-width: 0;
}
.el-menu-item{
    height: 40px !important;
}
.el-menu-item.is-active{
   background: #ffffff !important;
  border-radius: 6px 0px 0px 6px !important;
  color: #276efa !important;
  overflow: hidden;
}
.el-menu-item:hover{
 background-color: transparent;
}
.el-sub-menu .el-menu-item{
  min-width: 100px;
}
.nav-box {
  padding-left: 10px;
  box-sizing: border-box;
}

</style>
