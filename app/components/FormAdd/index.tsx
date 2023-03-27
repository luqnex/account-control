import { Form } from "@remix-run/react";
import { Input } from "./Input";

interface ModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormAdd = ({ setOpen }: ModalProps) => {
  return (
    <Form method="post" className="bg-gray-50 px-4 py-3 flex flex-col gap-2">
      <h1 className="text-[1.5rem] my-4 m-auto ">Adição de gastos ou rendas</h1>

      <input
        type="hidden"
        name="formAddNewExpense"
        defaultValue="formAddNewExpense"
      />

      <Input name="name" placeholder="Nome" />

      <div className="flex flex-col gap-1">
        <p>Escolha o tipo:</p>
        <div className="flex gap-3">
          <input type="radio" name="type" id="expense" value="expense" />
          <label htmlFor="expense">Gasto</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="type" id="revenue" value="revenue" />
          <label htmlFor="revenue">Renda</label>
        </div>
      </div>

      <Input placeholder="amount" name="amount" />
      <Input placeholder="due date" name="dueDate" />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="border border-[black]/[.4] mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-red hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Adicionar
        </button>
      </div>
    </Form>
  );
};
