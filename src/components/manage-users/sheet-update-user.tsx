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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCreateUser } from "@/hooks/query-users/useCreateUser";
import useFormUser from "@/hooks/query-users/useFormUser";
import { useGetUser } from "@/hooks/query-users/useGetUser";
import { useUpdateUser } from "@/hooks/query-users/useUpdateUser";
import { useToastMessage } from "@/hooks/useToastMessage";
import { useUserStore } from "@/store/useUserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

const listUsers = ["customer", "employee", "admin"];

function SheetUpdateUser() {
  const { id, sheetUpdate, setSheetUpdate } = useUserStore();
  const queryClient = useQueryClient();
  const { form, formSchema } = useFormUser();
  const { data: user } = useGetUser(id);
  const mutation = useUpdateUser();
  const { toastLoading, toastSuccess, toastError } = useToastMessage();

  const handleCreateUser = (values: z.infer<typeof formSchema>) => {
    toastLoading("Vui lòng đợi!");
    mutation.mutate(
      { id: id, data: values },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: ["users"] });
          queryClient.refetchQueries({ queryKey: ["user", id] });
          toastSuccess("Cập nhật quản trị thành công");
          form.reset();
          setSheetUpdate(false);
        },
        onError: (error) => {
          toastError(error.message);
        },
      },
    );
  };

  useEffect(() => {
    form.setValue("email", user?.email ?? "");
    form.setValue("phone_number", user?.phone_number ?? "");
    form.setValue("name", user?.name ?? "");
    form.setValue("password", user?.password ?? "");
    form.setValue("role", user?.role ?? "");
  }, [user]);

  return (
    <Sheet open={sheetUpdate} onOpenChange={setSheetUpdate}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tạo User</SheetTitle>
          <SheetDescription>Tạo khoản quản trị viên</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateUser)}
            className="mt-4 flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => <Input placeholder="Email" {...field} />}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <Input type="password" placeholder="Mật khẩu" {...field} />
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <Input placeholder="Họ và tên" {...field} />
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <Input placeholder="Số điện thoại" {...field} />
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Danh mục cha</FormLabel>
                  <FormMessage />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value ?? ""}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"Phân quyền"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listUsers.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button>Save</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default SheetUpdateUser;
