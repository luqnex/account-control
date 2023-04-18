import { MdAttachMoney } from "react-icons/md";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { CardValue } from "./CardValues";
import { CardCounts } from "./CardCounts";

import type { Expense } from "~/interfaces/expenses";
import type { Revenue } from "~/interfaces/revenue";

interface DashboardProps {
  revenue: Revenue;
  expenses: Expense[];
}

export const Dashboard = ({ revenue, expenses }: DashboardProps) => {
  const sumOfExpenses = expenses.reduce((acc, expense) => {
    return acc + Number(expense.amount);
  }, 0);

  const currentBalance = revenue?.amount - sumOfExpenses;

  return (
    <div className="flex flex-col mb-[6rem]">
      <h1 className="text-[1.5rem] text-white font-bold">Dashboard</h1>
      <div className="flex gap-6 mt-6">
        <CardValue
          title="Saldo atual"
          value={currentBalance || 0}
          icon={
            <MdAttachMoney className="text-[2rem] bg-blue text-white rounded-full" />
          }
        />
        <CardValue
          title="Renda"
          value={revenue?.amount || 0}
          icon={
            <MdExpandLess className="text-[2rem] bg-green  rounded-full fill-white" />
          }
        />
        <CardValue
          title="Gastos"
          value={sumOfExpenses}
          icon={
            <MdExpandMore className="text-[2rem]  bg-red rounded-full fill-white" />
          }
        />
      </div>
      <div className="flex flex-col mt-12 gap-5">
        {expenses.length ? (
          expenses.map((count) => (
            <CardCounts
              key={count.id}
              id={count.id}
              date={count.due_date}
              name={count.name}
              value={count.amount}
              checked={count.checked}
            />
          ))
        ) : (
          <p className="text-white text-[1.5rem]">
            Você ainda não cadastrou suas contas!
          </p>
        )}
      </div>
    </div>
  );
};
