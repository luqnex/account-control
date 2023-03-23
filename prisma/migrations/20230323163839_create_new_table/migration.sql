/*
  Warnings:

  - You are about to drop the column `ckecked` on the `counts` table. All the data in the column will be lost.
  - Added the required column `checked` to the `counts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "counts" DROP COLUMN "ckecked",
ADD COLUMN     "checked" BOOLEAN NOT NULL;
