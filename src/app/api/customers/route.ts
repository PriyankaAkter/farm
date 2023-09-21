'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const GET = async (req) => {
    const customers = await prisma.customers.findMany()
    return NextResponse.json(customers)
}
export const POST = async (req) => {
    const data = await req.json()

    const res = await prisma.customers.create({
        data: data
    })
    return NextResponse.json(res)
}