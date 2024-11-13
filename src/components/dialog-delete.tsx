import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToastMessage } from "@/hooks/useToastMessage";
import { UseMutationResult, useQueryClient } from "@tanstack/react-query";

interface DialogDeleteProps {
  refetchKey: string;
  open: boolean;
  setModalDelete: (open: boolean, id?: string) => void;
  id: string;
  mutation: UseMutationResult<any, Error, string, unknown>;
}

function DialogDelete({
  refetchKey,
  open,
  mutation,
  id,
  setModalDelete,
}: DialogDeleteProps) {
  const queryClient = useQueryClient();

  const { toastSuccess } = useToastMessage();

  const handleDelete = () => {
    mutation.mutate(id, {
      onSuccess: () => {
        queryClient.refetchQueries({ queryKey: [refetchKey] });
        setModalDelete(false);
        toastSuccess("Xoá quản trị thành công");
      },
      onError: (error) => {},
    });
  };

  return (
    <Dialog open={open} onOpenChange={setModalDelete}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bạn có chắc chắn muốn xoá {id} này</DialogTitle>
          <DialogFooter>
            <Button
              disabled={mutation.isPending}
              onClick={handleDelete}
              size={"sm"}
              variant={"destructive"}
            >
              Xoá
            </Button>
            <Button onClick={() => setModalDelete(false)} size={"sm"}>
              Thoát
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDelete;
