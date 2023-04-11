import { Form } from "@remix-run/react";
import { Input } from "~/components/Input";
import type { ErrorsProps } from "~/interfaces/login";

interface LoginPageProps extends ErrorsProps {}

export const LoginPage = ({ errors }: LoginPageProps) => {
  return (
    <div>
      <Form method="post" className="flex flex-col gap-3">
        <Input name="email" id="email" placeholder="Email" />
        <Input name="password" placeholder="Senha" type="password" />
        {(errors?.email || errors?.password) && (
          <span className="text-red">{errors.email}</span>
        )}
        <button type="submit">Entrar</button>
      </Form>
    </div>
  );
};
