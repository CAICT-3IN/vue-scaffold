<template>
  <header class="main-header">
    <h1>头部内容</h1>
    <div class="user-info flex">
      <div class="pointer exit-box" @click="handleExit">
        <span class="exit-text">退出登录</span>
      </div>
      <i class="line"></i>
      <div>
          <img
          width="30"
          height="30"
          v-if="!avatar"
          class="avatar"
          src="@/assets/icons/user-head.svg"
          alt=""
        />
        <img
          width="30"
          height="30"
          v-else
          class="avatar"
          :src="avatar"
          alt=""
        />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "permissionList",
  data() {
    return {
      avatar:false
    };
  },
  methods: {
    // 退出登录
    handleExit() {
      localStorage.setItem("_token", "");
      location.href = "/login";
    }
  },
  created() {
  },
});
</script>
<style scoped>
.main-header {
  padding: 23px 30px 23px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
}

.main-header > h1 {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  line-height: 24px;
}

.user-info > div {
  display: flex;
  align-items: center;
}

.exit-text {
  font-size: 14px;
  font-weight: 400;
  color: #4e4e4e;
  line-height: 20px;
  padding-left: 8px;
}

.line {
  width: 1px;
  height: 30px;
  background: #efefef;
  margin-left: 30px;
  margin-right: 30px;
}

.company-name-box {
  max-width: 124px;
  font-size: 14px;
  font-weight: 400;
  color: #333333;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px;
  margin-right: 12px;
}

.exit-icon-box {
  width: 14px;
  height: 18px;
}

.exit-box:hover > .exit-icon-box {
  color: #276efa;
}

.drop-box {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.drop-box > svg {
  width: 8px;
  height: 6px;
  cursor: pointer;
  transition: transform 0.3 ease;
}

.drop-box:hover > svg {
  transform: rotate(180deg);
}

.drop-item {
  width: 148px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
<style>
.head-drop-box .el-popper__arrow {
  display: none !important;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  overflow: hidden;
  display: inline-block;
}
</style>