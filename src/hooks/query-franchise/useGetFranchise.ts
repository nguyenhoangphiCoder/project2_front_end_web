import { franchisesApi } from "@/api/franchisesApi";
import { FranChises } from "@/types/franchise.type";
import { useQuery } from "@tanstack/react-query";

export const useGetFranchise = (id: string) => {
  return useQuery<FranChises>({
    queryKey: ["franchise", id],
    queryFn: async () => {
      return (await franchisesApi.get(id)).data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    refetchOnReconnect: true,
  });
};
