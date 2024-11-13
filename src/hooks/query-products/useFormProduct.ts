import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useFormProduct() {
  const formSchema = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    quantity: z.number().min(0),
    quantity_sold: z.number().min(0),
    franchise_id: z.number(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      quantity: 1,
      quantity_sold: 0,
      franchise_id: 0,
    },
  });

  return { formSchema, form };
}
