import { Form, Link } from "@remix-run/react";

import Payment from "../../assets/payment.png";

import { Input } from "~/components/Input";
import type { ErrorsProps } from "~/interfaces/login";

interface LoginPageProps extends ErrorsProps {}

export const LoginPage = ({ errors }: LoginPageProps) => {
  return (
    <div className="w-full min-h-[100vh] bg-black-01 flex justify-center items-center px-[2rem] gap-[6rem]">
      <div className="w-[80%] max-w-[35rem] flex">
        <img src={Payment} alt="man in login" className="w-[100%]" />
      </div>
      <Form method="post" className="w-[50%] max-w-[30rem] flex flex-col gap-3">
        <h1 className="max-w-[25rem] text-white text-[2rem] font-bold">
          Faça login para gerenciar seus gastos
        </h1>
        <Input name="email" id="email" placeholder="Email" />
        <Input name="password" placeholder="Senha" type="password" />
        {(errors?.email || errors?.password) && (
          <span className="text-red">{errors.email}</span>
        )}
        <button
          className="bg-blue text-white p-2 rounded mt-[3rem]"
          type="submit"
        >
          Entrar
        </button>
        <p className="text-white">
          Não possui uma conta?{" "}
          <span className="text-blue font-bold">
            <Link to="/createAccount">Criar Conta</Link>
          </span>
        </p>
      </Form>
    </div>
  );
};
