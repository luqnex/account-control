import { db } from "~/db/db.server";

export const deleteExpense = async (expenseId: string | undefined) => {
  return await db.expense.delete({ where: { id: expenseId } });
};
