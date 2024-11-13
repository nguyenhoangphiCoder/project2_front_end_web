import { franchisesApi } from "@/api/franchisesApi";
import { FranChises } from "@/types/franchise.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllFranchises = () => {
  return useQuery<FranChises[]>({
    queryKey: ["franchises"],
    queryFn: async () => {
      return (await franchisesApi.getAll()).data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 0,
  });
};
