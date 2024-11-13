import { categoriesApi } from "@/api/cateogoriesApi";
import { useMutation } from "@tanstack/react-query";

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      return await categoriesApi.update(id, name);
    },
  });
};
