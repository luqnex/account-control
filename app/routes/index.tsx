import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router";

import type { ActionArgs } from "@remix-run/node";

import { userMock } from "~/api/userMock";

import { db } from "~/db/db.server";

import type { User } from "~/interfaces/user";
import type { Expense } from "~/interfaces/expenses";

import { DefaultLayout } from "~/components/DefaultLayout";

import { Dashboard } from "~/pages/Dashboard";
import { deleteExpense } from "~/api/services/deleteExpense";

interface LoaderResponse {
  user: User;
  counts: Expense[];
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const expenseId = formData.get("expenseId")?.toString();

  deleteExpense(expenseId);

  return null;
};

export const loader: LoaderFunction = async () => {
  const { id, email, name } = await userMock();

  const data = await db.expense.findMany();

  return {
    counts: data,
    user: {
      id,
      name,
      email,
    },
  };
};

export default function Index() {
  const { counts, user } = useLoaderData<LoaderResponse>();

  return (
    <DefaultLayout name={user.name}>
      <Dashboard expenses={counts} />
    </DefaultLayout>
  );
}
