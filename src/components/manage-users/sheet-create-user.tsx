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
import { useUserStore } from "@/store/useUserStore";
import { z } from "zod";

const listUsers = ["customer", "employee", "admin"];

function SheetCreateUser() {
  const { id, sheetCreate, setSheetCreate } = useUserStore();
  const { form, formSchema } = useFormUser();
  const mutation = useCreateUser();

  const handleCreateUser = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <Sheet open={sheetCreate} onOpenChange={setSheetCreate}>
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
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Email" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Input type="password" placeholder="Mật khẩu" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Họ và tên" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Số điện thoại" {...field} />
                  <FormMessage />
                </FormItem>
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

export default SheetCreateUser;
