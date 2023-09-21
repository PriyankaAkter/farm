'use server'
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
export const GET = async (req) => {
    const product = await prisma.product.findMany()
    return NextResponse.json(product)
}
export const POST = async (req) => {
    const data = await req.json()

    const res = await prisma.product.create({
        data: data
    })
    return NextResponse.json(res)
}
// export const PUT = async (req) => {
//     const data = await req.json()
//     const productId = data.id;
//     const res = await prisma.product.update({
//         where: {
//           id: productId,
//         },
//         data: {
//             name: data.name,
//             slug: data.slug
//           // Update the fields you want to change
//           // Example: name: data.name, price: data.price
//         },
//       })
//     return NextResponse.json(res)
// }
// export const DELETE = async (req) => {
//     const data = await req.json()
//     const productId = data.id;
//     const res = await prisma.product.delete({
//         where: {
//           id: productId,
//         }
//       })
//     return NextResponse.json(res)
// }