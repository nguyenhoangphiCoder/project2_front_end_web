import axiosClient from "@/api/axios-client";

export const ordersApi = {
  getAll: () => {
    const url = "orders/";
    return axiosClient().get(url);
  },
  getByUser: (id: string) => {
    const url = `order_items/order/${id}`;
    return axiosClient().get(url);
  },
};
