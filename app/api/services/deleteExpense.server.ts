import { db } from "~/db/db.server";

interface DeleteExpenseParams {
  expenseId: string | undefined;
}

export const deleteExpense = async ({ expenseId }: DeleteExpenseParams) => {
  return await db.expense.delete({
    where: { id: expenseId },
  });
};
