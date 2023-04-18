import { db } from "~/db/db.server";

interface GetAllExpensesParams {
  userId: string;
}

export const getAllExpenses = async ({ userId }: GetAllExpensesParams) => {
  return await db.expense.findMany({
    where: { type: "expense", user_id: userId },
    orderBy: { created_at: "asc" },
  });
};
