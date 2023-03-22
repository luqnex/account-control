import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router";
import { userMock } from "~/api/userMock";
import { DefaultLayout } from "~/components/DefaultLayout";
import type { User } from "~/interfaces/user";
import { Dashboard } from "~/pages/Dashboard";

export const loader: LoaderFunction = async (): Promise<User> => {
  const { id, email, name } = await userMock();

  return {
    id,
    name,
    email,
  };
};

export default function Index() {
  const { id, email, name } = useLoaderData<User>();

  return (
    <div>
      <DefaultLayout name={name}>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}
