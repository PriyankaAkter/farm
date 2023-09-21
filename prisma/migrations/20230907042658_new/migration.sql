/*
  Warnings:

  - You are about to drop the `Coupon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Coupon";

-- CreateTable
CREATE TABLE "Coupons" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "percent" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'Active',
    "description" TEXT NOT NULL,

    CONSTRAINT "Coupons_pkey" PRIMARY KEY ("id")
);
