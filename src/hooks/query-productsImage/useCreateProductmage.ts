import { productsImageApi } from "@/api/productsImageApi";
import { useMutation } from "@tanstack/react-query";

export const useCreateProductImage = () => {
  return useMutation({
    mutationFn: async (body: { id: string; image_url: string }) => {
      return await productsImageApi.upload(body.id, body.image_url);
    },
  });
};
