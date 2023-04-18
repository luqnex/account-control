import { Form, Link } from "@remix-run/react";

import man from "../../assets/man.png";

import { Input } from "~/components/Input";
import type { ErrorsCreateAccount } from "~/interfaces/createAccount";

interface CreateAccountPageProps extends ErrorsCreateAccount {}

export const CreateAccountPage = ({ errors }: CreateAccountPageProps) => {
  return (
    <div className="w-full min-h-[100vh] bg-black-01 flex justify-center items-center px-[2rem] gap-[6rem]">
      <div className="w-[50%] max-w-[30rem] flex">
        <img src={man} alt="man in login" className="w-[100%] max-w-[30rem]" />
      </div>
      <Form method="post" className="w-[50%] max-w-[30rem] flex flex-col gap-3">
        <h1 className="max-w-[25rem] text-white text-[2rem] font-bold">
          Crie uma conta e comece a gerenciar seus gastos
        </h1>
        <Input name="name" placeholder="Nome" required />
        <Input name="email" placeholder="Email" required />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        {errors?.email && <span className="text-red">{errors.email}</span>}
        <button
          className="bg-blue text-white p-2 rounded mt-[3rem]"
          type="submit"
        >
          Criar
        </button>
        <hr className="text-gray/25 mt-[1rem]" />
        <button className=" text-white" type="button">
          <Link to="/login">Voltar</Link>
        </button>
      </Form>
    </div>
  );
};
