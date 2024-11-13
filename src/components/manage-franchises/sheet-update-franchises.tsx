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
import useFormFranchises from "@/hooks/query-franchise/useFormFranchises";
import { useGetFranchise } from "@/hooks/query-franchise/useGetFranchise";
import { useUpdateFranchise } from "@/hooks/query-franchise/useUpdateFranchise";
import { useFranchisesStore } from "@/store/useFranchisesStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

function SheetUpdateFranchises() {
  const { id, sheetUpdate, setSheetUpdate } = useFranchisesStore();
  const { form, formSchema } = useFormFranchises();
  const mutation = useUpdateFranchise();
  const { data: franchise } = useGetFranchise(id);
  const queryClient = useQueryClient();

  const handleCreateFranchises = (values: z.infer<typeof formSchema>) => {
    const { owner_id, ...data } = values;
    mutation.mutate(
      { id, data },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: ["franchises"] });
          queryClient.refetchQueries({ queryKey: ["franchise", id] });
          setSheetUpdate(false);
          form.reset();
        },
      },
    );
  };

  useEffect(() => {
    if (franchise) {
      form.setValue("name", franchise.name);
      form.setValue("address", franchise.address);
      form.setValue("phone_number", franchise.phone_number);
    }
  }, [franchise]);

  return (
    <Sheet open={sheetUpdate} onOpenChange={setSheetUpdate}>
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

export default SheetUpdateFranchises;
