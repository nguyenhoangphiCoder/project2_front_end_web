import { productsApi } from "@/api/productsApi";
import { useMutation } from "@tanstack/react-query";

export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      return await productsApi.delete(id);
    },
  });
};
