import { MdAttachMoney } from "react-icons/md";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { CardValue } from "./CardValues";
import { CardCounts } from "./CardCounts";

import type { Expense } from "~/interfaces/expenses";

interface DashboardProps {
  expenses: Expense[];
}

export const Dashboard = ({ expenses }: DashboardProps) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[1.5rem] text-white font-bold">Dashboard</h1>
      <div className="flex gap-6 mt-6">
        <CardValue
          title="Saldo atual"
          value="R$ 1.000,00"
          icon={
            <MdAttachMoney className="text-[2rem] bg-blue text-white rounded-full" />
          }
        />
        <CardValue
          title="Rendas"
          value="R$ 1.000,00"
          icon={
            <MdExpandLess className="text-[2rem] bg-green  rounded-full fill-white" />
          }
        />
        <CardValue
          title="Gastos"
          value="R$ 1.000,00"
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
