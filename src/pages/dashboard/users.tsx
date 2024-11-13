import DataTable from "@/components/data-table";
import DialogDelete from "@/components/dialog-delete";
import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/manage-users/columns";
import SheetCreateUser from "@/components/manage-users/sheet-create-user";
import SheetUpdateUser from "@/components/manage-users/sheet-update-user";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDeleteUser } from "@/hooks/query-users/useDeleteUser";
import { useGetAllUsers } from "@/hooks/query-users/useGetAllUsers";
import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/useUserStore";
import { Plus } from "lucide-react";
import { useState } from "react";

function UsersPage() {
  const { setSheetCreate, id, modalDelete, setModalDelete } = useUserStore();
  const { data: users } = useGetAllUsers();
  const mutation = useDeleteUser();

  return (
    <>
      <PageContainer>
        <div className="space-y-4">
          {" "}
          <div className="flex items-start justify-between">
            <Heading
              title="Users"
              description="Manage users (Server side table functionalities.)"
            />
            <Button
              onClick={() => setSheetCreate(true)}
              className={cn(buttonVariants(), "text-xs md:text-sm")}
            >
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
          </div>
          <DataTable columns={columns} data={users ?? []} />
        </div>
      </PageContainer>
      <SheetCreateUser />
      <SheetUpdateUser />
      <DialogDelete
        refetchKey="users"
        id={id}
        open={modalDelete}
        setModalDelete={setModalDelete}
        mutation={mutation}
      />
    </>
  );
}

export default UsersPage;
