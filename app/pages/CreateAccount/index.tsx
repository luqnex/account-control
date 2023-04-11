import { Form } from "@remix-run/react";
import { Input } from "~/components/Input";

export const CreateAccountPage = () => {
  return (
    <Form method="post" className="flex flex-col gap-3">
      <Input name="name" placeholder="Nome" />
      <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Password" type="password" />
      <button>Criar</button>
    </Form>
  );
};
