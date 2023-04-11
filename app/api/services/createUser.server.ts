import bcrypt from "bcrypt";
import { db } from "~/db/db.server";

interface CreateUserParams {
  name: string;
  email: string;
  password: string;
}

export const createUser = async ({
  email,
  name,
  password,
}: CreateUserParams) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return await db.user.create({
    data: { email, name, password: hashedPassword },
  });
};
