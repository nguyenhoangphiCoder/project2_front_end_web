import axiosClient from "@/api/axios-client";
import { CreateProduct } from "@/types/product.type";

export const productsApi = {
  getAll: async () => {
    const url = "products";
    return await axiosClient().get(url);
  },

  create(body: CreateProduct) {
    const url = "products";
    return axiosClient().post(url, body);
  },
  get(id: string) {
    const url = `products/${id}`;
    return axiosClient().get(url);
  },
  delete(id: string) {
    const url = `products/${id}`;
    return axiosClient().delete(url);
  },
  update(id: string, body: CreateProduct) {
    const url = `products/${id}`;
    return axiosClient().patch(url, body);
  },
};
