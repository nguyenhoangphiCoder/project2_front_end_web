export type User = {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  password: string;
  avatar_url: string;
  favorite_theme: string;
  role: string;
  created_at: string;
};

export type CreateUser = Pick<
  User,
  | "name"
  | "password"
  | "phone_number"
  | "avatar_url"
  | "email"
  | "favorite_theme"
  | "role"
>;
