import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFormLogin from "@/hooks/query-users/useFormLogin";
import { useLogin } from "@/hooks/query-users/useLogin";
import { useToastMessage } from "@/hooks/useToastMessage";
import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import { z } from "zod";

const FormLogin = () => {
  const { form, formSchema } = useFormLogin();
  const mutation = useLogin();
  const { toastLoading } = useToastMessage();
  const { setIsAuth } = useAuthStore();

  const handleLogin = (values: z.infer<typeof formSchema>) => {
    toastLoading("Vui lòng đợi");
    mutation.mutate(values, {
      onSuccess: (data) => {
        setIsAuth(true, data.user.id);
      },
    });
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="flex w-full flex-col space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Mật khẩu..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Đăng nhập</Button>
        </form>
      </Form>
    </>
  );
};

export default FormLogin;
