import { Link } from "@remix-run/react";

import { AiFillHome } from "react-icons/ai";

export const SideBar = () => {
  return (
    <div className="w-[15rem] h-screen bg-black-02 fixed top-0 left-0 flex flex-col items-center pt-4">
      <h1 className="text-5xl text-white">LOGO</h1>

      <button className="w-10rem bg-blue rounded-full text-white font-bold px-5 py-2 mt-8">
        Novo +
      </button>

      <ul className="mt-6">
        <Link to="#">
          <li className="flex items-center gap-2 text-blue font-medium">
            <div>
              <AiFillHome className="w-[1.2rem]" />
            </div>
            Dashboard
          </li>
        </Link>
      </ul>
    </div>
  );
};
