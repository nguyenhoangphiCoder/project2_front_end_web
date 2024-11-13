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
import { useGetCategory } from "@/hooks/query-categories/useGetCategory";
import { useUpdateCategory } from "@/hooks/query-categories/useUpdatecategory";
import { useCreateUser } from "@/hooks/query-users/useCreateUser";
import useFormUser from "@/hooks/query-users/useFormUser";
import { useGetUser } from "@/hooks/query-users/useGetUser";
import { useUpdateUser } from "@/hooks/query-users/useUpdateUser";
import { useToastMessage } from "@/hooks/useToastMessage";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useUserStore } from "@/store/useUserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { z } from "zod";

const listUsers = ["customer", "employee", "admin"];

function SheetUpdateCategory() {
  const { id, sheetUpdate, setSheetUpdate } = useCategoryStore();
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const mutation = useUpdateCategory();
  const { data: category } = useGetCategory(id);
  const { toastLoading, toastSuccess, toastError } = useToastMessage();

  const handleUpdateCategory = () => {
    mutation.mutate(
      { id, name },
      {
        onSuccess: () => {
          setSheetUpdate(false);
          queryClient.refetchQueries({ queryKey: ["categories"] });
          toastSuccess("Cập nhật danh mục thành công");
        },
        onError: (error) => {
          toastError(error.message);
        },
      },
    );
  };

  useEffect(() => {
    setName(category?.name || "");
  }, [category]);

  return (
    <Sheet open={sheetUpdate} onOpenChange={setSheetUpdate}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cập nhật danh mục</SheetTitle>
          <SheetDescription>Cập nhật danh mục</SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex w-full flex-col gap-4">
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            value={name}
            placeholder="nhập tên danh mục"
            className="col-span-3"
          />
          <Button
            type="button"
            onClick={handleUpdateCategory}
            className="ml-auto"
          >
            Save changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SheetUpdateCategory;
