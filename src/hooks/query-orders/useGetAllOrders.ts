import { ordersApi } from "@/api/ordersApi";
import { Orders } from "@/types/order.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllOrders = () => {
  return useQuery<Orders[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      return (await ordersApi.getAll()).data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 0,
  });
};
