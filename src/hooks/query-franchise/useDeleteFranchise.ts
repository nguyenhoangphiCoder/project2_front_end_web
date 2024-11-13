import { franchisesApi } from "@/api/franchisesApi";
import { useMutation } from "@tanstack/react-query";

export const useDeleteFranchise = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      return await franchisesApi.delete(id);
    },
  });
};
