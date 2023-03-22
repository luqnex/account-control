import type { ReactNode } from "react";

interface ContainerChildrenProps {
  children: ReactNode;
}

export const Body = ({ children }: ContainerChildrenProps) => {
  return (
    <div className="w-[calc(100%-15rem)] min-h-[calc(100%-4rem)] absolute right-0 top-[4rem] bg-black-01 px-10 pt-4 pb-10">
      {children}
    </div>
  );
};
