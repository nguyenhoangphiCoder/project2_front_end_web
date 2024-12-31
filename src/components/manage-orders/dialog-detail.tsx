import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useOrderStore } from "@/store/useOrderStore";
import { useGetOrder } from "@/hooks/query-orders/useGetOrder";
import { ScrollArea } from "../ui/scroll-area";

const DialogDetails = () => {
  const { id, setModal, modal } = useOrderStore();
  const { data: order } = useGetOrder(id);

  console.log(order);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[500px]">
        <DialogHeader>
          <DialogTitle>Order Detail</DialogTitle>
          <DialogDescription>Order detail of Customer.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex flex-col gap-2">
          {order?.map((item) => (
            <div className="my-2 flex flex-col gap-2 rounded border p-2">
              <span>Name: {item.product.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Size: {item.size}</span>
              <span>Price: {item.price}</span>
            </div>
          ))}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDetails;
