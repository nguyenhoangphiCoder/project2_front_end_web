import DataTable from "@/components/data-table";
import DialogDelete from "@/components/dialog-delete";
import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/manage-products/columns";
import SheetCreateProduct from "@/components/manage-products/sheet-create-product";
import SheetUpdateProduct from "@/components/manage-products/sheet-update-product";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDeleteProduct } from "@/hooks/query-products/useDeleteProduct";
import { useGetAllProducts } from "@/hooks/query-products/useGetAllProducts";
import { cn } from "@/lib/utils";
import { useProductStore } from "@/store/useProductStore";
import { Plus } from "lucide-react";

function ProductsPage() {
  const { setSheetCreate, id, modalDelete, setModalDelete } = useProductStore();
  const { data: products } = useGetAllProducts();
  const mutation = useDeleteProduct();

  return (
    <>
      <PageContainer>
        <div className="space-y-4">
          {" "}
          <div className="flex items-start justify-between">
            <Heading
              title="Products"
              description="Manage products (Server side table functionalities.)"
            />
            <Button
              onClick={() => setSheetCreate(true)}
              className={cn(buttonVariants(), "text-xs md:text-sm")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
          </div>
          <DataTable columns={columns} data={products ?? []} />
        </div>
      </PageContainer>
      <SheetCreateProduct />
      <SheetUpdateProduct />
      <DialogDelete
        refetchKey="products"
        id={id}
        open={modalDelete}
        setModalDelete={setModalDelete}
        mutation={mutation}
      />
    </>
  );
}

export default ProductsPage;
