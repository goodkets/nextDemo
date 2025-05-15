import axiosInstance from "@/app/utils/axios";

interface GetListParams {
  color?: string;
}

const getListAll = (params: GetListParams) => {
  return axiosInstance.post("/list", params);
};

export { getListAll };