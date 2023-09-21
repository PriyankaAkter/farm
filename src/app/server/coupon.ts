"use server";

import prisma from "@/lib/prisma";

export const  createCoupon = async (data:any) =>{
    try {
        const newCoupon = await prisma.coupon.create({
            data
        })
        return newCoupon
    } catch (error) {
        console.log(error)
    }
}
export const getAllCoupons = async () =>{
    try {
        const result = await prisma.coupon.findMany();
        return result;
    } catch (error) {
        console.log(error)
    }
}


    // try {
    //     const newUser = await prisma.user.createMany({
    //         data:[
    //             {
    //             email:"rim@gmail.com",
    //             name:"rim"
    //         },
    //         {
    //             email:"namu@gmail.com",
    //             name:"namu"
    //         },
    //     ]
    //     })
    //     return newUser
    // } catch (error) {
    //     console.log(error)
    // }
