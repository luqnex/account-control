import type { ActionArgs } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";

import { createUser } from "~/api/services/createUser.server";
import { getUserByEmail } from "~/api/services/getUserByEmail.server";
import type { ErrorsCreateAccount } from "~/interfaces/createAccount";
import { CreateAccountPage } from "~/pages/CreateAccount";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!name || !email || !password) {
    return null;
  }

  const hasEmail = await getUserByEmail({ email });

  if (hasEmail) {
    return json({ errors: { email: "Tente outro email" } }, { status: 400 });
  }

  await createUser({ email, name, password });

  return redirect("/login");
};

export default function CreateAccount() {
  const actionData = useActionData<ErrorsCreateAccount>();

  const errors = actionData?.errors;

  return <CreateAccountPage errors={errors} />;
}
