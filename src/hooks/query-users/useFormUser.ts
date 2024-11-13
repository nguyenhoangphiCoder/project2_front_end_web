import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function useFormUser() {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    name: z.string(),
    password: z.string(),
    phone_number: z.string(),
    avatar_url: z.string(),
    favorite_theme: z.string(),
    role: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      phone_number: "",
      avatar_url: "",
      favorite_theme: "",
      role: "",
    },
  });

  return { formSchema, form };
}
