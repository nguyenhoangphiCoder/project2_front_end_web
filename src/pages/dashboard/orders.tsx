import DataTable from "@/components/data-table";
import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { columns } from "@/components/manage-orders/columns";
import DialogDetails from "@/components/manage-orders/dialog-detail";
import { useGetAllOrders } from "@/hooks/query-orders/useGetAllOrders";
import React from "react";

function OrdersPage() {
  const { data: orders } = useGetAllOrders();

  return (
    <>
      <PageContainer>
        <div className="space-y-4">
          {" "}
          <div className="flex items-start justify-between">
            <Heading
              title="Orders"
              description="Manage orders (Server side table functionalities.)"
            />
          </div>
          <DataTable columns={columns} data={orders ?? []} />
        </div>
      </PageContainer>
      <DialogDetails />
    </>
  );
}

export default OrdersPage;
