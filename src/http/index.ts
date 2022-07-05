import axios, { AxiosInstance } from "axios";

const voidAuthPath = ["/login", "/wxcallback", "/alipay-redirect"];
const noTokenPath = ["/sms"];
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APIURL as string,
});

instance.interceptors.request.use((config: any) => {
  if (!noTokenPath.includes(config.url)) {
    config.headers.Authorization = localStorage.getItem("_token");
    config.headers.ORGANIZATIONID = localStorage.getItem("_active_org_id");
  }
  return config;
});
instance.interceptors.response.use(
  (response) => {
    if (response.data?.status !== 200 && response.data?.detail) {
      console.log("====",response.data?.detail, "error")
    }
    return response;
  },
  (error) => {
    console.log("====",error.response.data.detail, "error")
    // 在需要验证权限的页面上出现403就跳转登录页面
    if (
      error.response.status === 401 &&
      !voidAuthPath.includes(location.pathname)
    ) {
      // location.href = "/login";
    }

    return Promise.reject(error.response);
  }
);
