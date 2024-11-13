import Actions from "@/components/actions";
import { useProductStore } from "@/store/useProductStore";
import { useUserStore } from "@/store/useUserStore";
import { Product } from "@/types/product.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return row.getValue("price");
    },
  },
  {
    accessorKey: "",
    header: "Thao tác",
    cell: ({ row }) => {
      const { id } = row.original;
      const { setSheetUpdate, setModalDelete } = useProductStore();
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
