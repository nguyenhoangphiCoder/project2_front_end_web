import { categoriesApi } from "@/api/cateogoriesApi";
import { useMutation } from "@tanstack/react-query";

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: async (name: string) => {
      return await categoriesApi.create(name);
    },
  });
};
