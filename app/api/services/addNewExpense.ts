import type { ExpenseEnum } from "@prisma/client";
import { db } from "~/db/db.server";

interface AddNewExpenseProps {
  name: string;
  amount: string;
  due_date: Date;
  type: ExpenseEnum;
  userId: string;
}

export const addNewExpense = async ({
  amount,
  due_date,
  name,
  type,
  userId,
}: AddNewExpenseProps) => {
  // "a61bba42-72e4-484e-a2f4-b561e8bb02e3"
  return await db.expense.create({
    data: {
      name: name,
      amount: amount ?? "",
      due_date: new Date(due_date),
      checked: false,
      created_at: new Date(),
      type: type,
      user_id: userId,
    },
  });
};
