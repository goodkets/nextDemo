import axiosInstance from "@/app/utils/axios";
const getListAll = (body) => {
  return axiosInstance.post("/home/list",{...body});
};
export { getListAll };