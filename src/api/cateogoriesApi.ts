import axiosClient from "@/api/axios-client";

export const categoriesApi = {
  create(name: string) {
    const url = "categories";
    return axiosClient().post(url, { name });
  },
  getAll() {
    const url = "categories";
    return axiosClient().get(url);
  },
  get(id: string) {
    const url = `categories/${id}`;
    return axiosClient().get(url);
  },
  update(id: string, name: string) {
    const url = `categories/${id}`;
    return axiosClient().put(url, { name });
  },
  delete(id: string) {
    const url = `categories/${id}`;
    return axiosClient().delete(url);
  },
};
