import DataTable from "@/components/data-table";
import DialogDelete from "@/components/dialog-delete";
import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/manage-franchises/columns";
import SheetCreateFranchises from "@/components/manage-franchises/sheet-create-franchises";
import SheetUpdateFranchises from "@/components/manage-franchises/sheet-update-franchises";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDeleteFranchise } from "@/hooks/query-franchise/useDeleteFranchise";
import { useGetAllFranchises } from "@/hooks/query-franchise/useGetAllFranchise";
import { cn } from "@/lib/utils";
import { useFranchisesStore } from "@/store/useFranchisesStore";
import { Plus } from "lucide-react";

function FranchisesPage() {
  const { id, modalDelete, setModalDelete, setSheetCreate } =
    useFranchisesStore();
  const { data: franchises } = useGetAllFranchises();
  const mutation = useDeleteFranchise();

  return (
    <>
      <PageContainer>
        <div className="space-y-4">
          {" "}
          <div className="flex items-start justify-between">
            <Heading
              title="Franchises"
              description="Manage franchises (Server side table functionalities.)"
            />
            <Button
              onClick={() => setSheetCreate(true)}
              className={cn(buttonVariants(), "text-xs md:text-sm")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
          </div>
          <DataTable columns={columns} data={franchises ?? []} />
        </div>
      </PageContainer>
      <SheetCreateFranchises />
      <SheetUpdateFranchises />
      <DialogDelete
        refetchKey="franchises"
        id={id}
        open={modalDelete}
        setModalDelete={setModalDelete}
        mutation={mutation}
      />
    </>
  );
}

export default FranchisesPage;
