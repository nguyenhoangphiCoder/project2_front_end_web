import Actions from "@/components/actions";
import { useCategoryStore } from "@/store/useCategoryStore";
import { Category } from "@/types/category.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    accessorKey: "updated_at",
    header: "Updated At",
  },
  {
    accessorKey: "",
    header: "Thao tác",
    cell: ({ row }) => {
      const { id } = row.original;
      const { setSheetUpdate, setModalDelete } = useCategoryStore();
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
