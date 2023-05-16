import { useState } from "react";
import type { FormEvent } from "react";
import { Form, useSubmit } from "@remix-run/react";

import { FaTrashRestore } from "react-icons/fa";

import { formatCurrencyValue, formatDate } from "~/utils";
import { Modal } from "~/components/Modal";
import { FormDelete } from "~/pages/Dashboard/FormDelete";
import { FormEditCount } from "./FormEditCount";

interface CardCountsProps {
  id: string;
  name: string;
  value: number;
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
  const [isChecked, setIsChecked] = useState(checked);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

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

        <div
          className="hover:cursor-pointer"
          onClick={() => setOpenModalEdit(!openModalEdit)}
        >
          <p>
            {name} - {formatCurrencyValue(value)}
          </p>
          <p>Vencimento: {formatDate(date)}</p>
        </div>
      </div>
      <FaTrashRestore
        className="text-red-500 cursor-pointer text-[1.3rem]"
        onClick={() => setOpenModalDelete(true)}
      />

      <Modal open={openModalDelete} setOpen={setOpenModalDelete}>
        <FormDelete expenseId={id} setOpen={setOpenModalDelete} />
      </Modal>
      <Modal open={openModalEdit} setOpen={setOpenModalEdit}>
        <FormEditCount
          id={id}
          date={date}
          name={name}
          value={value}
          setOpen={setOpenModalEdit}
        />
      </Modal>
    </div>
  );
};
