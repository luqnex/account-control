import { db } from "~/db/db.server";

export const getRevenue = async () => {
  return await db.expense.findMany({
    where: { type: "revenue" },
    orderBy: { created_at: "desc" },
    take: 1,
  });
};
