import { Orders } from "@/types/order.type";

export type OrderItems = {
  id: number;
  size: string;
  quantity: number;
  price: number;
  created_at: Date;
  updated_at: Date;
  product_id: number;
};
