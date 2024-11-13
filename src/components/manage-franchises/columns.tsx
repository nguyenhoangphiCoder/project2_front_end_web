import Actions from "@/components/actions";
import { useFranchisesStore } from "@/store/useFranchisesStore";
import { FranChises } from "@/types/franchise.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<FranChises>[] = [
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
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => {
      return row.getValue("address");
    },
  },
  {
    accessorKey: "",
    header: "Thao tác",
    cell: ({ row }) => {
      const { id } = row.original;
      const { setSheetUpdate, setModalDelete } = useFranchisesStore();
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
