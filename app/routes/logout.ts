import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/session.server";

export const action = ({ request }: ActionArgs) => {
  return logout(request);
};

export const loader = () => {
  return redirect("/login");
};
