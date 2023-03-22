import { useState } from "react";

import { FaTrashRestore } from "react-icons/fa";
import { Modal } from "~/components/Modal";

interface CardCountsProps {
  id: number;
  name: string;
  value: number;
  date: string;
  check: boolean;
  handleClickDeleteItem: (id: number) => void;
}

export const CardCounts = ({
  id,
  check,
  date,
  name,
  value,
  handleClickDeleteItem,
}: CardCountsProps) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(check);

  return (
    <div
      className={`h-[5rem] flex items-center justify-between bg-black-02 py-2 px-4 text-white rounded-[0.5rem] border-l-8 ${
        checked ? "border-green" : "border-[red]"
      } shadow-[0px_4px_8px_#0F0F0F]`}
    >
      <div className="flex gap-8">
        <input
          type="checkbox"
          checked={checked}
          className={`w-[1.2rem] ${
            checked ? "accent-green" : ""
          } hover:cursor-pointer`}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <div>
          <p>
            {name} - R$ {value}
          </p>
          <p>Vencimento: {date}</p>
        </div>
      </div>
      <FaTrashRestore
        className="text-red-500 cursor-pointer text-[1.3rem]"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        setOpen={setOpen}
        action={() => handleClickDeleteItem(id)}
      />
    </div>
  );
};
