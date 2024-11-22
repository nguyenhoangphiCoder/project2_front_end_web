import axiosClient from "@/api/axios-client";

export const productsImageApi = {
  upload: (product_id: string, image_url: string) => {
    const url = `product_images`;
    return axiosClient().post(url, {
      product_id: String(product_id),
      image_url,
    });
  },
};
