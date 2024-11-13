import { productsApi } from "@/api/productsApi";
import { CreateProduct } from "@/types/product.type";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: CreateProduct }) => {
      return await productsApi.update(id, data);
    },
  });
};
