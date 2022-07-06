import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/global.css";

const app = createApp(App);
app.use(router);
app.directive("activeOrg", {
    mounted(el: any, binding, vnode) {
        if (el.dataset.active_id === binding.value) {
            el.parentNode.style.background = "#f5f7fa";
        } else {
            el.parentNode.style.background = "#fff";
        }
    },
    updated(el, binding) {
        if (el.dataset.active_id === binding.value) {
            el.parentNode.style.background = "#f5f7fa";
        } else {
            el.parentNode.style.background = "#fff";
        }
    },
});
app.mount("#app");
