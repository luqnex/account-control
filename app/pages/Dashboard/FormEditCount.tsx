import { useEffect } from "react";
import { Form, useNavigation } from "@remix-run/react";

import { Input } from "../../components/Input";

interface ModalProps {
  id: string;
  name: string;
  value: number;
  date: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEditCount = ({
  id,
  date,
  name,
  value,
  setOpen,
}: ModalProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "submitting") {
      setOpen(false);
    }
  }, [navigation.state, setOpen]);

  return (
    <Form method="post" className="flex flex-col gap-2 px-4 py-3">
      <h1 className="text-[1.5rem] my-4 m-auto">Edite {name}</h1>

      <input
        type="hidden"
        name="formEditExpense"
        defaultValue="formEditExpense"
      />

      <input type="hidden" name="expenseId" defaultValue={id} />

      <div className={"flex flex-col gap-2"}>
        <label htmlFor="name">Escolha o nome:</label>
        <Input
          name="name"
          id="name"
          placeholder="Nome"
          defaultValue={name}
          required
        />
      </div>

      <label htmlFor="amount">Insira o valor:</label>
      <Input
        placeholder="Valor"
        name="amount"
        id="amount"
        type="number"
        step="0.01"
        defaultValue={value}
        required
      />

      <div className={`flex flex-col gap-2`}>
        <label htmlFor="date">Insira a data de vencimento:</label>
        <Input
          name="dueDate"
          id="date"
          type="date"
          required
          min={new Date().toISOString().substring(0, 10)}
          defaultValue={new Date(date).toISOString().substring(0, 10)}
        />
      </div>

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
