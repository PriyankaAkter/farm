/*
  Warnings:

  - The `status` column on the `Coupon` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `description` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Expired');

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Active';
