import axiosClient from "@/api/axios-client";
import { Login } from "@/types/login.type";
import { CreateUser } from "@/types/user.type";

export const usersApi = {
  login(body: Login) {
    const url = "users/sign-in";
    return axiosClient().post(url, body, {
      withCredentials: true,
    });
  },
  getAll() {
    const url = "users";
    return axiosClient().get(url);
  },
  create(body: CreateUser) {
    const url = "users";
    return axiosClient().post(url, body);
  },
  get(id: string) {
    const url = `users/${id}`;
    return axiosClient().get(url);
  },
  update(id: string, body: CreateUser) {
    const url = `users/${id}`;
    return axiosClient().patch(url, body);
  },
  delete(id: string) {
    const url = `users/${id}`;
    return axiosClient().delete(url);
  },
};
