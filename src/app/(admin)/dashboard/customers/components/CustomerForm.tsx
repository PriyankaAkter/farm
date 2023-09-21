"use client"

import { createCoupon } from '@/app/server/coupon';
import React from 'react'
import { useForm } from 'react-hook-form';

function CouponForm() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors,isSubmitting,isLoading } = formState;
    // const onSubmit = async (data) => {
    //   const {expireDate,...rest} = data
    //   try {
    //     const date = new Date(expireDate).toISOString()
    //     const newCoupon = await createCoupon({expireDate:date,...rest});
    //     console.log(newCoupon)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };

    // onSubmit={handleSubmit(onSubmit)}
  return (
    <div className="w-[500px]">
          <h6>NEW COUPON</h6>
          <form  noValidate className="flex gap-4 flex-col">
            <div className="grid gap-3">
              <label htmlFor="coupon" className="text-base">
                Coupon Code
              </label>
              <div>
                <input
                  type="text"
                  id="coupon"
                  placeholder="placeholder"
                  {...register("code", {
                    required: {
                      value: true,
                      message: "Coupon is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.code?.message as string}</p>
            </div>

            <div className="grid gap-3">
              <label htmlFor="percent" className="text-base">
                By percent
              </label>
              <div>
                <input
                  type="text"
                  id="percent"
                  {...register("percent", {
                    required: {
                      value: true,
                      message: "By percent is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.percent?.message as string}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="currency" className="text-base">
                By Currency
              </label>
              <div>
                <input
                  type="text"
                  id="currency"
                  {...register("currency", {
                    required: {
                      value: true,
                      message: "By currency is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.currency?.message as string}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="date" className="text-base">
                Expired Date
              </label>
              <div>
                <input
                  type="text"
                  id="date"
                  {...register("expireDate", {
                    required: {
                      value: true,
                      message: "Expired Date is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.expireDate?.message as string}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="date" className="text-base">
                Description
              </label>
              <div>
                <textarea
                  className="border border-theme-gray w-full pl-4 py-4"
                  name=""
                  id=""
                  rows={8}
                  placeholder="Enter product description"
                  {...register("description")}
                ></textarea>
                {/* <input
                  type="text"
                  id="date"
                  
                  {...register("currency", {
                    required: {
                      value: true,
                      message: "Expired Date is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                /> */}
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <button type="reset" className="py-3 px-12 bg-theme-gray text-black">
                RESET
              </button>
              <button disabled={isLoading || isSubmitting} type="submit" className="py-3 px-12 bg-secondary text-white">
                {isSubmitting ? "Submitting...": "ADD NEW"}
              </button>
            </div>
          </form>
        </div>
  )
}

export default CouponForm