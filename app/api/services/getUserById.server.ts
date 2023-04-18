import { db } from "~/db/db.server";

interface GetUserByIdParams {
  id: string;
}

export const getUserById = async ({ id }: GetUserByIdParams) => {
  return await db.user.findUnique({
    where: { id },
  });
};
