import { useState } from "react";

import { FaTrashRestore } from "react-icons/fa";
import { Modal } from "~/components/Modal";
import { formatDate } from "~/utils";

interface CardCountsProps {
  id: string;
  name: string;
  value: string;
  date: string;
  checked: boolean;
}

export const CardCounts = ({
  id,
  checked,
  date,
  name,
  value,
}: CardCountsProps) => {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <div
      className={`h-[5rem] flex items-center justify-between bg-black-02 py-2 px-4 text-white rounded-[0.5rem] border-l-8 ${
        isChecked ? "border-green" : "border-[red]"
      } shadow-[0px_4px_8px_#0F0F0F]`}
    >
      <div className="flex gap-8">
        <input
          type="checkbox"
          checked={isChecked}
          className={`w-[1.2rem] ${
            isChecked ? "accent-green" : ""
          } hover:cursor-pointer`}
          onChange={(event) => setIsChecked(event.target.checked)}
        />
        <div>
          <p>
            {name} - R$ {value}
          </p>
          <p>Vencimento: {formatDate(date)}</p>
        </div>
      </div>
      <FaTrashRestore
        className="text-red-500 cursor-pointer text-[1.3rem]"
        onClick={() => setOpen(true)}
      />
      <Modal expenseId={id} open={open} setOpen={setOpen} />
    </div>
  );
};
