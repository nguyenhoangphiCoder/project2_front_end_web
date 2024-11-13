import toast from "react-hot-toast";

export const useToastMessage = () => {
  const toastLoading = (message: string) => {
    return toast.loading(message, {
      id: "default",
    });
  };

  const toastSuccess = (message: string) => {
    return toast.success(message, {
      id: "default",
    });
  };

  const toastError = (message: string) => {
    return toast.error(message, {
      id: "default",
    });
  };

  return {
    toastLoading,
    toastSuccess,
    toastError,
  };
};
