import { db } from "~/db/db.server";

export const updateExpense = async (checkboxId: string | undefined) => {
  const expense = await db.expense.findUnique({
    where: {
      id: checkboxId,
    },
  });

  return await db.expense.update({
    data: { checked: !expense?.checked },
    where: { id: checkboxId },
  });
};
