import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCreateFranchises } from "@/hooks/query-franchise/useCreateFranchise";
import useFormFranchises from "@/hooks/query-franchise/useFormFranchises";
import { useAuthStore } from "@/store/useAuthStore";
import { useFranchisesStore } from "@/store/useFranchisesStore";
import { useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

function SheetCreateFranchises() {
  const { sheetCreate, setSheetCreate } = useFranchisesStore();
  const { id } = useAuthStore();
  const { form, formSchema } = useFormFranchises();
  const mutation = useCreateFranchises();
  const queryClient = useQueryClient();

  const handleCreateFranchises = (values: z.infer<typeof formSchema>) => {
    console.log("id", id);
    mutation.mutate(
      { ...values, owner_id: id },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: ["franchises"] });
          form.reset();
        },
      },
    );
  };

  return (
    <Sheet open={sheetCreate} onOpenChange={setSheetCreate}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create Franchises</SheetTitle>
          <SheetDescription>Create Franchises</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateFranchises)}
            className="mt-4 flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Address" {...field} />
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
            <Button>Save</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}

export default SheetCreateFranchises;
