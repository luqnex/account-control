import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { createUser } from "~/api/services/createUser.server";
import { CreateAccountPage } from "~/pages/CreateAccount";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password) {
    return null;
  }

  await createUser({ email, name, password });

  return redirect("/login");
};

export default function CreateAccount() {
  return <CreateAccountPage />;
}
