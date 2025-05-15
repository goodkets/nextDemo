import axiosInstance from "@/app/utils/axios";

const getListAll = () => {
  return axiosInstance.post("/list");
};

export { getListAll };