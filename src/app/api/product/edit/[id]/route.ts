'use server'
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export  const POST = async (req:NextRequest, {params}) =>{

const {id} = params
const data = await req.json()

  const res = await prisma.product.update({
    where:{
      id:Number(id)
    },
    data
  })


  return NextResponse.json(res)

}
 
