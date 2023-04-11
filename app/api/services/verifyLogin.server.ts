import bcrypt from "bcrypt";

import { db } from "~/db/db.server";

interface VerifyLoginParams {
  email: string;
  password: string;
}

export const verifyLogin = async ({ email, password }: VerifyLoginParams) => {
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return null;
  }

  return user;
};
