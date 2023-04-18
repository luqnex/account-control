import { db } from "~/db/db.server";

interface GetRevenueParams {
  userId: string;
}

export const getRevenue = async ({ userId }: GetRevenueParams) => {
  return await db.expense.findMany({
    where: { type: "revenue", user_id: userId },
    orderBy: { created_at: "desc" },
    take: 1,
  });
};
