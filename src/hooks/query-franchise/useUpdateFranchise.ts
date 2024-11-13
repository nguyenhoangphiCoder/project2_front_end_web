import { franchisesApi } from "@/api/franchisesApi";
import { UpdateFranChise } from "@/types/franchise.type";
import { useMutation } from "@tanstack/react-query";

export const useUpdateFranchise = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateFranChise }) => {
      return await franchisesApi.update(id, data);
    },
  });
};
