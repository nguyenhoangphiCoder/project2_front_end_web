import { usersApi } from "@/api/users-api";
import { User } from "@/types/user.type";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      return (await usersApi.getAll()).data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: 0,
  });
};
