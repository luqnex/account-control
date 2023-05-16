import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import type { ErrorBoundaryComponent } from "@remix-run/react/dist/routeModules";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { AiOutlinePlus } from "react-icons/ai";

import type { User } from "~/interfaces/user";
import type { Expense } from "~/interfaces/expenses";

import { DefaultLayout } from "~/components/DefaultLayout";

import { Modal } from "~/components/Modal";
import { ExpenseEnum } from "@prisma/client";
import { Dashboard } from "~/pages/Dashboard";
import { FormAdd } from "~/pages/Dashboard/FormAdd";
import { deleteExpense } from "~/api/services/deleteExpense.server";
import { addNewExpense } from "~/api/services/addNewExpense.server";
import { updateExpense } from "~/api/services/updateExpense.server";
import { getAllExpenses } from "~/api/services/getAllExpenses.server";
import { getRevenue } from "~/api/services/getRevenue.server";
import type { Revenue } from "~/interfaces/revenue";
import { requireUserId } from "~/session.server";
import { getUserById } from "~/api/services/getUserById.server";
import { editExpense } from "~/api/services/editExpense.server";

interface LoaderResponse {
  user: User;
  counts: Expense[];
  revenue: Revenue[];
}

export const action = async ({ request }: ActionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();

  const isFormEditExpense = formData.get("formEditExpense") ? true : false;
  const isFormAddNewExpense = formData.get("formAddNewExpense") ? true : false;
  const isFormDeleteExpense = formData.get("formDeleteExpense") ? true : false;

  const expenseId = formData.get("expenseId")?.toString();

  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const amount = formData.get("amount")?.toString();
  const dueDate = formData.get("dueDate")?.toString();

  const checkboxId = formData.get("checkboxId")?.toString();

  console.log("isFormEditExpense", isFormEditExpense);

  if (isFormEditExpense) {
    editExpense({
      id: expenseId ?? "",
      amount: amount ?? "",
      due_date: new Date(dueDate ?? ""),
      name: name ?? "",
    });
  }

  if (isFormAddNewExpense) {
    addNewExpense({
      amount: amount ?? "",
      due_date: new Date(dueDate ?? ""),
      name: name ?? "",
      type:
        type === "expense" ? ExpenseEnum["expense"] : ExpenseEnum["revenue"],
      userId: userId,
    });
  }

  if (isFormDeleteExpense) {
    // TODO: aqui validar id vindo do form com id salvo no cookie.

    deleteExpense({ expenseId });
  }

  if (checkboxId) {
    // TODO: aqui validar id vindo do form com id salvo no cookie.

    updateExpense(checkboxId);
  }

  return null;
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);

  const user = await getUserById({ id: userId });

  if (!user) {
    throw redirect("/login");
  }

  const excludePassword = (user: User) => {
    delete user["password"];
    return user;
  };

  const userData = excludePassword(user);

  const counts = await getAllExpenses({ userId });

  const revenue = await getRevenue({ userId });

  return {
    counts,
    revenue,
    user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
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
