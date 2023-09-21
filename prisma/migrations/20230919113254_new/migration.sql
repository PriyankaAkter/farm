/*
  Warnings:

  - You are about to drop the column `balances` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `totalOrders` on the `Customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `altPhone` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `district` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `optional` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "balances",
DROP COLUMN "status",
DROP COLUMN "totalOrders",
ADD COLUMN     "altPhone" INTEGER NOT NULL,
ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "code" INTEGER NOT NULL,
ADD COLUMN     "district" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "optional" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Customers_email_key" ON "Customers"("email");
