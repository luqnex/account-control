import { db } from "~/db/db.server";

interface GetUserByEmailParams {
  email: string;
}

export const getUserByEmail = async ({ email }: GetUserByEmailParams) => {
  return await db.user.findUnique({
    where: { email },
    select: { password: false },
  });
};
