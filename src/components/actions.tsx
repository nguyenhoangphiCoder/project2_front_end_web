import { Button } from "@/components/ui/button";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ActionsProps {
  id: string;
  setSheetUpdate?: any;
  setModalDelete?: any;
}

function Actions({
  id,
  setSheetUpdate,
  setModalDelete,
}: Readonly<ActionsProps>) {
  const handleSheetUpdate = () => {
    setSheetUpdate(true, id);
  };

  const handleModalDelete = () => {
    setModalDelete(true, id);
  };
  return (
    <div className="flex gap-2">
      <FaRegEdit
        onClick={handleSheetUpdate}
        className="h-4 w-4 cursor-pointer hover:text-sky-900"
      />
      <RiDeleteBin6Line
        onClick={handleModalDelete}
        className="h-4 w-4 cursor-pointer hover:text-sky-900"
      />
    </div>
  );
}

export default Actions;
