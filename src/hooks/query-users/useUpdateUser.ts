import { usersApi } from "@/api/users-api";
import { CreateUser } from "@/types/user.type";
import { useMutation } from "@tanstack/react-query";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: CreateUser }) => {
      return await usersApi.update(id, data);
    },
  });
};
