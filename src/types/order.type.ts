import { FranChises } from "@/types/franchise.type";
import { OrderItems } from "@/types/order-item.type";
import { PaymentMethod } from "@/types/payment-method.type";
import { User } from "@/types/user.type";

export type Orders = {
  id: number;
  user: User;
  payment_method: PaymentMethod;
  managed_by: User;
  buyer_name: string;
  buyer_phone: string;
  buyer_email: string;
  franchise: FranChises;
  created_at: Date;
  updated_at: Date;
  status: string;
  order_items: OrderItems[];
};
