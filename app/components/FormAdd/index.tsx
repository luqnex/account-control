import { Form, useNavigation } from "@remix-run/react";
import { Input } from "./Input";
import { useEffect } from "react";

interface ModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormAdd = ({ setOpen }: ModalProps) => {
  const navigation = useNavigation();
  console.log(navigation.state);

  useEffect(() => {
    if (navigation.state === "submitting") {
      setOpen(false);
    }
  }, [navigation.state, setOpen]);

  return (
    <Form method="post" className="bg-gray-50 px-4 py-3 flex flex-col gap-2">
      <h1 className="text-[1.5rem] my-4 m-auto ">Adição de gasto ou renda</h1>

      <input
        type="hidden"
        name="formAddNewExpense"
        defaultValue="formAddNewExpense"
      />

      <label htmlFor="name">Escolha o nome:</label>
      <Input name="name" id="name" placeholder="Nome" required />

      <div className="flex flex-col gap-1">
        <p>Escolha o tipo:</p>
        <div className="flex gap-3">
          <input
            type="radio"
            name="type"
            id="expense"
            value="expense"
            defaultChecked
          />
          <label htmlFor="expense">Gasto</label>
        </div>

        <div className="flex gap-3">
          <input type="radio" name="type" id="revenue" value="revenue" />
          <label htmlFor="revenue">Renda</label>
        </div>
      </div>

      <label htmlFor="amount">Insira o valor:</label>
      <Input
        placeholder="Valor"
        name="amount"
        id="amount"
        type="text"
        required
      />

      <label htmlFor="date">Insira a data de vencimento:</label>
      <Input name="dueDate" id="date" type="date" required />

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          className="border border-[black]/[.4] mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-green px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
        >
          Adicionar
        </button>
      </div>
    </Form>
  );
};
