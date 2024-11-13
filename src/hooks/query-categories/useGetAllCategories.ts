import { categoriesApi } from "@/api/cateogoriesApi";
import { Category } from "@/types/category.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllCategories = () => {
  return useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      return (await categoriesApi.getAll()).data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 0,
  });
};
