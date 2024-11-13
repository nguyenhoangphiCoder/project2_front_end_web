import { usersApi } from "@/api/users-api";
import { useToastMessage } from "@/hooks/useToastMessage";
import { Login } from "@/types/login.type";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { toastSuccess, toastError } = useToastMessage();

  return useMutation({
    mutationFn: async (data: Login) => {
      return (await usersApi.login(data)).data;
    },
    onSuccess: (data) => {
      navigate("/");
      toastSuccess("Đăng nhập thành công");
    },
    onError: (error) => {
      toastError(error.message);
    },
  });
};
