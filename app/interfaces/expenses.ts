import type { ExpenseEnum } from "@prisma/client";

export interface Expense {
  id: string;
  name: string;
  type: ExpenseEnum;
  amount: number;
  due_date: string;
  created_at: string;
  checked: boolean;
  user_id: string;
}
