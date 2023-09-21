import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const GET = async (req) => {
    const coupons = await prisma.coupons.findMany()
    return NextResponse.json(coupons)
}
export const POST = async (req) => {
    const data = await req.json()

    const res = await prisma.coupons.create({
        data: data
    })
    return NextResponse.json(res)
}