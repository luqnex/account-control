import type { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { Form, useNavigation } from "@remix-run/react";

import { Input } from "../../components/Input";

interface ModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

enum RadioButtonValue {
  expense = "expense",
  revenue = "revenue",
}

export const FormAdd = ({ setOpen }: ModalProps) => {
  const [radioButtonChecked, setRadioButtonChecked] = useState(
    RadioButtonValue.expense
  );

  const navigation = useNavigation();

  const handleChangeRadioButton = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === RadioButtonValue.expense) {
      setRadioButtonChecked(RadioButtonValue.expense);

      return;
    }

    setRadioButtonChecked(RadioButtonValue.revenue);
  };

  useEffect(() => {
    if (navigation.state === "submitting") {
      setOpen(false);
    }
  }, [navigation.state, setOpen]);

  return (
    <Form method="post" className="flex flex-col gap-2 px-4 py-3">
      <h1 className="text-[1.5rem] my-4 m-auto">Adição de gasto ou renda</h1>

      <input
        type="hidden"
        name="formAddNewExpense"
        defaultValue="formAddNewExpense"
      />

      <div className="flex gap-3">
        <p>Escolha o tipo:</p>
        <div className="flex gap-2">
          <input
            type="radio"
            name="type"
            id="expense"
            value="expense"
            defaultChecked
            className="w-[1rem]"
            onChange={handleChangeRadioButton}
          />
          <label htmlFor="expense">Gasto</label>
        </div>

        <div className="flex gap-2">
          <input
            type="radio"
            name="type"
            id="revenue"
            value="revenue"
            className="w-[1rem]"
            onChange={handleChangeRadioButton}
          />
          <label htmlFor="revenue">Renda</label>
        </div>
      </div>

      <div
        className={`flex flex-col gap-2 ${
          radioButtonChecked === RadioButtonValue.revenue && "hidden"
        }`}
      >
        <label htmlFor="name">Escolha o nome:</label>
        <Input
          name="name"
          id="name"
          placeholder="Nome"
          required
          defaultValue={
            radioButtonChecked === RadioButtonValue.revenue ? "Renda" : ""
          }
        />
      </div>

      <label htmlFor="amount">Insira o valor:</label>
      <Input
        placeholder="Valor"
        name="amount"
        id="amount"
        type="number"
        step="0.01"
        required
      />

      <div
        className={`flex flex-col gap-2 ${
          radioButtonChecked === RadioButtonValue.revenue && "hidden"
        }`}
      >
        <label htmlFor="date">Insira a data de vencimento:</label>
        <Input
          name="dueDate"
          id="date"
          type="date"
          required
          min={new Date().toISOString().substring(0, 10)}
          defaultValue={new Date().toISOString().substring(0, 10)}
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
