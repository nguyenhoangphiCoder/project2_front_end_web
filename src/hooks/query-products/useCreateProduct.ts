import { productsApi } from "@/api/productsApi";
import { CreateProduct } from "@/types/product.type";
import { useMutation } from "@tanstack/react-query";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: async (body: CreateProduct) => {
      return await productsApi.create(body);
    },
  });
};
