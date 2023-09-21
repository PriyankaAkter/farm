'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const GET = async (req) => {
    const category = await prisma.category.findMany()
    return NextResponse.json(category)
}
export const POST = async (req) => {
    const data = await req.json()

    const res = await prisma.category.create({
        data: data
    })
    return NextResponse.json(res)
}