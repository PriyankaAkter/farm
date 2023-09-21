-- CreateTable
CREATE TABLE "Coupon" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "percent" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "created" TEXT NOT NULL,
    "status" TEXT,

    CONSTRAINT "Coupon_pkey" PRIMARY KEY ("id")
);
