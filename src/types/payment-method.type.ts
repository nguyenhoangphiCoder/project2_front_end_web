import { Orders } from "@/types/order.type";
import { User } from "@/types/user.type";

export type PaymentMethod = {
  payment_method_id: number;

  user: User;

  method_type: string;

  provider_name: string;

  account_number: string;

  expiry_date: Date;

  created_at: Date;

  Orders: Orders[];

  user_id: number;
};
