import { Orders } from "@/types/order.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      return row.getValue("id");
    },
  },
  {
    accessorKey: "buyer_email",
    header: "Buyer Email",
    cell: ({ row }) => {
      return row.getValue("buyer_email");
    },
  },
  {
    accessorKey: "buyer_name",
    header: "Buyer Name",
    cell: ({ row }) => {
      return row.getValue("buyer_name");
    },
  },
  {
    accessorKey: "buyer_phone",
    header: "Buyer Phone",
    cell: ({ row }) => {
      return row.getValue("buyer_phone");
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      return row.getValue("created_at");
    },
  },
];
