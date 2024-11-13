import { Orders } from "@/types/order.type";
import { Product } from "@/types/product.type";

export type OrderItems = {
  id: number;

  order: Orders;

  product: Product;
  quantity: number;
  price: number;
  created_at: Date;
  updated_at: Date;
  product_id: number;
};
