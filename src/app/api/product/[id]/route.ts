'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
// export const GET = async (req) => {
//     const product = await prisma.product.findMany()
//     return NextResponse.json(product)
// }
// export const POST = async (req,{params}) => {
//     const data = await req.json()

//     const res = await prisma.product.create({
//         data: data
//     })
//     return NextResponse.json(res)
// }
// export const PUT = async (req) => {
//     const {id,...rest} = await req.json()

//     const res = await prisma.product.update({
//         where: {
//           id: id,
//         },
//         data: {...rest},
//       })
//     return NextResponse.json(res)
// }
export const GET = async (req,{params:{id}}) => {

    const res = await prisma.product.findFirst({
        where: {
          id:Number(id),
        }
      })
    return NextResponse.json(res)
}
export const DELETE = async (req,{params:{id}}) => {

    console.log({id});
    const res = await prisma.product.delete({
        where: {
          id:Number(id),
        }
      })
    return NextResponse.json(res)
}