import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useFormFranchises() {
  const formSchema = z.object({
    name: z.string(),
    owner_id: z.string(),
    address: z.string().min(1),
    phone_number: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      owner_id: "",
      address: "",
      phone_number: "",
    },
  });

  return { formSchema, form };
}
