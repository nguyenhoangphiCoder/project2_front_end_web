import { usersApi } from "@/api/users-api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      return await usersApi.delete(id);
    },
  });
};
