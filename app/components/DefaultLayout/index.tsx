import type { ReactNode } from "react";
import { Body } from "./Body";
import { Header } from "./Header";

import { SideBar } from "./SideBar";

interface DefaultLayoutProps {
  name: string;
  children: ReactNode;
}

export const DefaultLayout = ({ children, name }: DefaultLayoutProps) => {
  return (
    <div>
      <Header name={name} />
      <SideBar />
      <Body>{children}</Body>
    </div>
  );
};
