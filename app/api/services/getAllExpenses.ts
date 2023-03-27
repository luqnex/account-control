import { db } from "~/db/db.server";

export const getAllExpenses = async () => {
  return await db.expense.findMany({ where: { type: "expense" } });
};
