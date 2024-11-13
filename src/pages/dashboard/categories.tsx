import DataTable from "@/components/data-table";
import DialogDelete from "@/components/dialog-delete";
import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/manage-categories/columns";
import SheetCreateCategory from "@/components/manage-categories/sheet-create-category";
import SheetUpdateCategory from "@/components/manage-categories/sheet-update-category";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDeleteCategory } from "@/hooks/query-categories/useDeleteCategory";
import { useGetAllCategories } from "@/hooks/query-categories/useGetAllCategories";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Plus } from "lucide-react";
import { useState } from "react";

function CategoriesPage() {
  const { setSheetCreate, id, modalDelete, setModalDelete } =
    useCategoryStore();
  const { data: categories } = useGetAllCategories();
  const mutation = useDeleteCategory();

  return (
    <>
      <PageContainer>
        <div className="space-y-4">
          {" "}
          <div className="flex items-start justify-between">
            <Heading
              title="Categories"
              description="Manage categories (Server side table functionalities.)"
            />
            <Button
              onClick={() => setSheetCreate(true)}
              className={cn(buttonVariants(), "text-xs md:text-sm")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
          </div>
          <DataTable columns={columns} data={categories ?? []} />
        </div>
      </PageContainer>
      <SheetCreateCategory />
      <SheetUpdateCategory />
      <DialogDelete
        refetchKey="categories"
        id={id}
        open={modalDelete}
        setModalDelete={setModalDelete}
        mutation={mutation}
      />
    </>
  );
}

export default CategoriesPage;
