import axiosClient from "@/api/axios-client";

export const ordersApi = {
  getAll: () => {
    const url = "orders/";
    return axiosClient().get(url);
  },
};
