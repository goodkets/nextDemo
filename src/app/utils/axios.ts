import axios from "axios";

/**
 * 配置axios实例
 */
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error('NEXT_PUBLIC_API_BASE_URL 环境变量未配置');
}

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

// 拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;