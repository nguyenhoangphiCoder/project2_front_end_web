import { useGetOrder } from "@/hooks/query-orders/useGetOrder";
import { useOrderStore } from "@/store/useOrderStore";
import { OrderItems } from "@/types/order-item.type";
import { Orders } from "@/types/order.type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const { setModal } = useOrderStore();
      return (
        <button
          onClick={() => {
            setModal(true, row.getValue("id"));
          }}
        >
          {row.getValue("id")}
        </button>
      );
    },
  },
  {
    accessorKey: "",
    header: "Email",
    cell: ({ row }) => {
      const managed = row.getValue("user");
      return <h1>{managed?.email ?? "unknown"}</h1>;
    },
  },
  {
    accessorKey: "user",
    header: "Name",
    cell: ({ row }) => {
      const managed = row.getValue("user");
      return <h1>{managed?.name ?? "unknown"}</h1>;
    },
  },
  {
    accessorKey: "user",
    header: "Phone",
    cell: ({ row }) => {
      const managed = row.getValue("user");
      return <h1>{managed?.phone_number ?? "unknown"}</h1>;
    },
  },
  {
    accessorKey: "user",
    header: "Address",
    cell: ({ row }) => {
      const managed = row.getValue("franchise");
      return <h1>{managed?.address ?? "unknown"}</h1>;
    },
  },

  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      return row.getValue("created_at");
    },
  },
  {
    accessorKey: "orderItems",
    header: "Total",
    cell: ({ row }) => {
      const total = row.getValue("orderItems") as unknown as OrderItems[];
      return total.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
];
