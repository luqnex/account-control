import type { User } from "~/interfaces/user";

export const userMock = async (): Promise<User> => {
  return {
    id: 1,
    name: "Lucas Costa",
    email: "lucas@example.com",
  };
};
