import { FranChises } from "@/types/franchise.type";

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  quantity_sold: number;
  created_at: Date;
  updated_at: Date;
  frachises: FranChises;
};

export type CreateProduct = Pick<
  Product,
  "name" | "price" | "description" | "quantity" | "quantity_sold"
> & {
  franchise_id: number;
};
