import type { ReactNode } from "react";
import { formatCurrencyValue } from "~/utils";

interface CardValueProps {
  title: string;
  icon: ReactNode;
  value: number;
}

export const CardValue = ({ icon, title, value }: CardValueProps) => {
  return (
    <div className="inline-flex bg-black-02 py-2 px-4 text-white gap-10 rounded-[0.5rem] shadow-[0px_4px_8px_#0F0F0F]">
      <div>
        <p>{title}</p>
        <p>{formatCurrencyValue(value)}</p>
      </div>
      <div className="flex rounded-full items-center">{icon}</div>
    </div>
  );
};
