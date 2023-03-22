import { useState } from "react";
import { MdAttachMoney } from "react-icons/md";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

import { CardValue } from "./CardValues";
import { CardCounts } from "./CardCounts";
import { mockCounts } from "./mockCounts";

export const Dashboard = () => {
  const [listCounts, setListCounts] = useState<any>(mockCounts);

  const handleClickDeleteItem = (id: number) => {
    setListCounts(listCounts.filter((item: any) => item.id !== id));
  };

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
        {listCounts.map((count: any) => (
          <CardCounts
            key={count.id}
            id={count.id}
            date={count.date}
            name={count.name}
            value={count.value}
            check={count.check}
            handleClickDeleteItem={handleClickDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};
