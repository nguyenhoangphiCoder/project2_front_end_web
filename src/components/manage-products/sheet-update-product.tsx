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
import { Textarea } from "@/components/ui/textarea";
import { useGetAllFranchises } from "@/hooks/query-franchise/useGetAllFranchise";
import useFormProduct from "@/hooks/query-products/useFormProduct";
import { useGetProduct } from "@/hooks/query-products/useGetProduct";
import { useUpdateProduct } from "@/hooks/query-products/useUpdateProduct";
import { useProductStore } from "@/store/useProductStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { z } from "zod";

function SheetUpdateProduct() {
  const { setSheetUpdate, sheetUpdate, id } = useProductStore();
  const { formSchema, form } = useFormProduct();
  const { data: franchises } = useGetAllFranchises();
  const mutation = useUpdateProduct();
  const { data: product } = useGetProduct(id ?? "");
  const queryClient = useQueryClient();

  const handleCreateProduct = (values: z.infer<typeof formSchema>) => {
    mutation.mutate(
      { id, data: values },
      {
        onSuccess: () => {
          queryClient.refetchQueries({ queryKey: ["products"] });
          queryClient.refetchQueries({ queryKey: ["product", id] });
          setSheetUpdate(false);
          form.reset();
        },
      },
    );
  };

  useEffect(() => {
    if (product) {
      form.setValue("name", product.name);
      form.setValue("price", product.price);
      form.setValue("description", product.description);
      form.setValue("quantity", product.quantity);
    }
  }, [product]);

  return (
    <Sheet open={sheetUpdate} onOpenChange={setSheetUpdate}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update Product</SheetTitle>
          <SheetDescription>Update Product</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateProduct)}
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Price"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    placeholder="Quantity"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity_sold"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity Sold</FormLabel>
                  <Input
                    placeholder="Quantity Sold"
                    {...field}
                    onChange={(e) => field.onChange(+e.target.value)}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="franchise_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Franchise</FormLabel>
                  <FormMessage />
                  <Select onValueChange={(value) => field.onChange(+value)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={"Franchise"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {franchises?.map((item) => (
                        <SelectItem key={item.id} value={String(item.id)}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder="Description" {...field} rows={5} />
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

export default SheetUpdateProduct;
