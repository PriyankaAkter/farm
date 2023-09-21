'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()


export const GET = async (req,{params:{id}}) => {

    const res = await prisma.coupons.findFirst({
        where: {
          id:Number(id),
        }
      })
    return NextResponse.json(res)
}
export const DELETE = async (req,{params:{id}}) => {

    console.log({id});
    const res = await prisma.coupons.delete({
        where: {
          id:Number(id),
        }
      })
    return NextResponse.json(res)
}