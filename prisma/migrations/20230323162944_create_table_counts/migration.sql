/*
  Warnings:

  - Added the required column `ckecked` to the `counts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "counts" ADD COLUMN     "ckecked" BOOLEAN NOT NULL;
