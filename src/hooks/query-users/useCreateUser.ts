import { usersApi } from "@/api/users-api";
import { useToastMessage } from "@/hooks/useToastMessage";
import { useUserStore } from "@/store/useUserStore";
import { CreateUser } from "@/types/user.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateUser = () => {
  const { toastSuccess, toastError } = useToastMessage();
  const { setSheetCreate } = useUserStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateUser) => {
      return await usersApi.create(data);
    },
    onSuccess: (data) => {
      toastSuccess("Tạo quản trị thành công");
      setSheetCreate(false);
      queryClient.refetchQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toastError(error.message);
    },
  });
};
