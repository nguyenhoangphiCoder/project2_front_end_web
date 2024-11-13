import Actions from "@/components/actions";
import { useUserStore } from "@/store/useUserStore";
import { User } from "@/types/user.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return row.getValue("id");
    },
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return row.getValue("name");
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      return row.getValue("email");
    },
  },
  {
    accessorKey: "",
    header: "Thao tác",
    cell: ({ row }) => {
      const { id } = row.original;
      const { setSheetUpdate, setModalDelete } = useUserStore();
      return (
        <Actions
          id={id}
          setSheetUpdate={setSheetUpdate}
          setModalDelete={setModalDelete}
        />
      );
    },
  },
];
