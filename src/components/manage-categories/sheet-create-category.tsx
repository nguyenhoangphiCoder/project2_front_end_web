import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCreateCategory } from "@/hooks/query-categories/useCreateCategory";
import { useToastMessage } from "@/hooks/useToastMessage";
import { useCategoryStore } from "@/store/useCategoryStore";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

function SheetCreateCategory() {
  const queryClient = useQueryClient();
  const { sheetCreate, setSheetCreate } = useCategoryStore();
  const mutation = useCreateCategory();
  const [name, setName] = useState("");
  const { toastSuccess, toastError } = useToastMessage();

  const handleCreateCategory = () => {
    mutation.mutate(name, {
      onSuccess: () => {
        toastSuccess("Tạo danh mục");
        queryClient.refetchQueries({ queryKey: ["categories"] });
        setSheetCreate(false);
        setName("");
      },
      onError: (error) => {
        toastError(error.message);
      },
    });
  };

  return (
    <Sheet open={sheetCreate} onOpenChange={setSheetCreate}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tạo Category</SheetTitle>
          <SheetDescription>Tạo danh mục</SheetDescription>
        </SheetHeader>
        <div className="mt-4 flex w-full flex-col gap-4">
          <Input
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="nhập tên danh mục"
            className="col-span-3"
          />
          <Button
            type="button"
            onClick={handleCreateCategory}
            className="ml-auto"
          >
            Save changes
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SheetCreateCategory;
