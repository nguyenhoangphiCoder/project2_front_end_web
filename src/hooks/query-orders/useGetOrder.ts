import { ordersApi } from "@/api/ordersApi";
import { useQuery } from "@tanstack/react-query";

export const useGetOrder = (id: string) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: async () => {
      return (await ordersApi.getByUser(id)).data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 0,
    refetchOnReconnect: true,
  });
};
