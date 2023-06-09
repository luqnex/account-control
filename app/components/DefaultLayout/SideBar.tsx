import { Link } from "@remix-run/react";

import { AiFillHome } from "react-icons/ai";

export const SideBar = () => {
  return (
    <div className="w-[15rem] h-screen bg-black-02 fixed top-0 left-0 flex flex-col items-center pt-4">
      <h1 className="text-2xl text-white">Account Control</h1>

      <ul className="mt-10">
        <Link to="#">
          <li className="flex items-center gap-2 text-[1.5rem] text-blue font-medium ">
            <div>
              <AiFillHome className="w-[1.5rem]" />
            </div>
            Dashboard
          </li>
        </Link>
      </ul>
    </div>
  );
};
