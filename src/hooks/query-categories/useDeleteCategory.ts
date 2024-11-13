import { categoriesApi } from "@/api/cateogoriesApi";
import { useMutation } from "@tanstack/react-query";

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      return await categoriesApi.delete(id);
    },
  });
};
