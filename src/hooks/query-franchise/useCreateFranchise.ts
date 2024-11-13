import { franchisesApi } from "@/api/franchisesApi";
import { CreateFranChises } from "@/types/franchise.type";
import { useMutation } from "@tanstack/react-query";

export const useCreateFranchises = () => {
  return useMutation({
    mutationFn: async (body: CreateFranChises) => {
      return await franchisesApi.create(body);
    },
  });
};
