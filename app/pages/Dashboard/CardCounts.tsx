import { useState } from "react";
import type { FormEvent } from "react";
import { Form, useSubmit } from "@remix-run/react";

import { FaTrashRestore } from "react-icons/fa";

import { formatDate } from "~/utils";
import { Modal } from "~/components/Modal";
import { FormDelete } from "~/components/FormDelete";

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

  const submit = useSubmit();

  const handleChangeForm = (event: FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, { replace: true });
  };

  return (
    <div
      className={`h-[5rem] flex items-center justify-between bg-black-02 py-2 px-4 text-white rounded-[0.5rem] border-l-8 ${
        checked ? "border-green" : "border-[red]"
      } shadow-[0px_4px_8px_#0F0F0F]`}
    >
      <div className="flex gap-8">
        <Form
          method="post"
          onChange={handleChangeForm}
          className="flex flex-col justify-center "
        >
          <input type="hidden" name="checkboxId" defaultValue={id} />
          <input
            type="checkbox"
            name="checkbox"
            checked={isChecked}
            className={`w-[1.2rem] ${
              checked ? "accent-green" : ""
            } hover:cursor-pointer`}
            onChange={() => setIsChecked(!isChecked)}
          />
        </Form>

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

      <Modal open={open} setOpen={setOpen}>
        <FormDelete expenseId={id} setOpen={setOpen} />
      </Modal>
    </div>
  );
};
