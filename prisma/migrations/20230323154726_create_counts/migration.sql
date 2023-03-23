-- CreateTable
CREATE TABLE "counts" (
    "id" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL,
    "spending_name" TEXT NOT NULL,
    "spending_amount" DECIMAL(65,30) NOT NULL,
    "spending_description" TEXT NOT NULL,
    "spending_expiration" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "counts_pkey" PRIMARY KEY ("id")
);
