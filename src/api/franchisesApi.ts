import axiosClient from "@/api/axios-client";
import { CreateFranChises, UpdateFranChise } from "@/types/franchise.type";

export const franchisesApi = {
  getAll: () => {
    const url = "franchises/";
    return axiosClient().get(url);
  },
  create(body: CreateFranChises) {
    const url = "franchises/";
    return axiosClient().post(url, body);
  },
  get(id: string) {
    const url = `franchises/${id}`;
    return axiosClient().get(url);
  },
  delete(id: string) {
    const url = `franchises/${id}`;
    return axiosClient().delete(url);
  },
  update(id: string, body: UpdateFranChise) {
    const url = `franchises/${id}`;
    return axiosClient().patch(url, body);
  },
};
