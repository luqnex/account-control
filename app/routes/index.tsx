import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import type { ErrorBoundaryComponent } from "@remix-run/react/dist/routeModules";
import type { ActionArgs } from "@remix-run/node";
import type { LoaderFunction } from "react-router";

import { AiOutlinePlus } from "react-icons/ai";

import { userMock } from "~/api/userMock";

import type { User } from "~/interfaces/user";
import type { Expense } from "~/interfaces/expenses";

import { DefaultLayout } from "~/components/DefaultLayout";

import { Modal } from "~/components/Modal";
import { ExpenseEnum } from "@prisma/client";
import { Dashboard } from "~/pages/Dashboard";
import { FormAdd } from "~/components/FormAdd";
import { deleteExpense } from "~/api/services/deleteExpense";
import { addNewExpense } from "~/api/services/addNewExpense";
import { updateExpense } from "~/api/services/updateExpense";
import { getAllExpenses } from "~/api/services/getAllExpenses";
import { getRevenue } from "~/api/services/getRevenue";
import type { Revenue } from "~/interfaces/revenue";

interface LoaderResponse {
  user: User;
  counts: Expense[];
  revenue: Revenue[];
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const isFormAddNewExpense = formData.get("formAddNewExpense") ? true : false;
  const isFormDeleteExpense = formData.get("formDeleteExpense") ? true : false;

  const expenseId = formData.get("expenseId")?.toString();

  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const amount = formData.get("amount")?.toString();
  const dueDate = formData.get("dueDate")?.toString();

  const checkboxId = formData.get("checkboxId")?.toString();

  if (isFormAddNewExpense) {
    addNewExpense({
      amount: amount ?? "",
      due_date: new Date(dueDate ?? ""),
      name: name ?? "",
      type:
        type === "expense" ? ExpenseEnum["expense"] : ExpenseEnum["revenue"],
      // TODO: valor mockado, ajustar após criar a parte de criação de conta e login
      userId: "a61bba42-72e4-484e-a2f4-b561e8bb02e3",
    });
  }

  if (isFormDeleteExpense) {
    deleteExpense(expenseId);
  }

  if (checkboxId) {
    updateExpense(checkboxId);
  }

  return null;
};

export const loader: LoaderFunction = async () => {
  const { id, email, name } = await userMock();

  const counts = await getAllExpenses();

  const revenue = await getRevenue();

  return {
    counts,
    revenue,
    user: {
      id,
      name,
      email,
    },
  };
};

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <>
      <h1>Ocorreu um erro na página dashboard</h1>
      <p>Error: {error.message}</p>
    </>
  );
};

export default function Index() {
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const { counts, user, revenue } = useLoaderData<LoaderResponse>();

  const lastRevenue = revenue[0];

  return (
    <DefaultLayout name={user.name}>
      <Dashboard revenue={lastRevenue} expenses={counts} />

      <button
        className="w-[3.5rem] h-[3.5rem] flex items-center justify-center fixed right-10 bottom-10 bg-blue rounded-full  text-white text-[1rem]"
        onClick={() => setOpenModalAdd(!openModalAdd)}
      >
        <AiOutlinePlus />
      </button>
      <Modal open={openModalAdd} setOpen={setOpenModalAdd}>
        <FormAdd setOpen={setOpenModalAdd} />
      </Modal>
    </DefaultLayout>
  );
}
