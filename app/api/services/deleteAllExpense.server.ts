import { db } from "~/db/db.server";

export const deleteAllExpense = async () => {
  return await db.expense.deleteMany({ where: { type: "expense" } });
};
