import { useActionData } from "@remix-run/react";
import { redirect, json } from "@remix-run/node";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";

import { LoginPage } from "~/pages/Login";
import type { ErrorsProps } from "~/interfaces/login";
import { verifyLogin } from "~/api/services/verifyLogin.server";
import { createUserSession, getUserId } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  const redirectTo = "/";

  const formData = await request.formData();

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return null;
  }

  const verifiedUser = await verifyLogin({ email, password });

  if (!verifiedUser) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: verifiedUser.id,
    redirectTo,
  });
};

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);

  if (userId) return redirect("/");

  return json({});
};

export default function Login() {
  const actionData = useActionData<ErrorsProps>();

  const errors = actionData?.errors;

  return <LoginPage errors={errors} />;
}
