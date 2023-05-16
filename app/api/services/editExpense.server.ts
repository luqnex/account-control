import { db } from "~/db/db.server";

interface AddNewExpenseProps {
  id: string;
  name: string;
  amount: string;
  due_date: Date;
}

export const editExpense = async ({
  id,
  amount,
  due_date,
  name,
}: AddNewExpenseProps) => {
  return await db.expense.update({
    where: { id },
    data: {
      name: name,
      amount: amount ?? "",
      due_date: new Date(due_date),
    },
  });
};
