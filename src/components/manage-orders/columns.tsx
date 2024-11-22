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
    accessorKey: "managed_by",
    header: "Email",
    cell: ({ row }) => {
      const managed = row.getValue("managed_by");
      return <h1>{managed?.email ?? "unknown"}</h1>;
    },
  },
  {
    accessorKey: "buyer_name",
    header: "Name",
    cell: ({ row }) => {
      const managed = row.getValue("managed_by");
      return <h1>{managed?.name ?? "unknown"}</h1>;
    },
  },
  {
    accessorKey: "buyer_phone",
    header: "Phone",
    cell: ({ row }) => {
      const managed = row.getValue("managed_by");
      return <h1>{managed?.phone_number ?? "unknown"}</h1>;
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
