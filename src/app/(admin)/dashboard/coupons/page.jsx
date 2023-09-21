"use client";
import { useForm } from 'react-hook-form';
import Header from "@/admin/dashboard/components/layout/Header";
import {
  useQuery, useQueryClient,

} from '@tanstack/react-query'
import axios from 'axios'
import CouponTable from "./components/CouponTable";
import { useState } from 'react';
import { DropDownMenuDemo } from '../coupons/components/DropDown'

const fetchCoupon = ()=> {
  return  axios.get("/api/coupons")
}

const page = () => {  
  const form = useForm();
  const { register,handleSubmit, formState } = form;
  const { errors,isSubmitting} = formState;
  

    const onSubmit = async (data) => {
      console.log("Form submitted...", data);
      axios
        .post("/api/coupons", data)
        .then((res) => {
          console.log({ res });
        })
        .catch((err) => console.log({ err }));
    };
    const queryClient = useQueryClient()
    queryClient.invalidateQueries({ queryKey: ['coupons-data'] })
    const handleAddCoupons = () => {
      console.log({code, percent, currency});
    }
    

    const {isLoading,data,isError,error,refetch} = useQuery({
      queryKey:['coupons-data'], 
      queryFn: fetchCoupon
    })
    if(isLoading)
    {
      return <h2>Loading...</h2>
    }
    if(isError){
      return <h2>{error.message}</h2>
    }
  
    // console.log({data})


    const columns = [
      {
        header: "Code",
        accessorKey: "code",
        width:200
      },
      {
        header: "Percent",
        accessorKey: "percent",
      },
      {
        header: "Currency",
        accessorKey: "currency",
      },
      {
        header: "Created at",
        accessorKey: "createdAt",
       
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    
      {
        header: "Action",
        accessorKey: "action",
        cell: ({row}) => {
          // console.log({row});
          return <DropDownMenuDemo row={row.original}   />;
          
        }
      },
    ];
    // const {isLoading,data,isError,error,refetch} = useQuery({
    //   queryKey:['coupons-data'], 
    //   queryFn: fetchCoupon
    // })
    // if(isLoading)
    // {
    //   return <h2>Loading...</h2>
    // }
    // if(isError){
    //   return <h2>{error.message}</h2>
    // }
  
    // console.log({data})
    // const { errors,isSubmitting } = formState;

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
  
 
  return (
    <div className="container1 py-10">
      <div>
        <Header title="Coupons" subTitle="farmet Coupons Listing" />
      </div>
      <div className="flex gap-10 mt-20">
        <CouponTable data1={data.data} columns={columns}/>
        <div className="w-[500px]">
          <h6>NEW COUPON</h6>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex gap-4 flex-col">
            <div className="grid gap-3">
              <label htmlFor="code" className="text-base">
                Coupon Code
              </label>
              <div>
                <input
                  type="text"
                  id="code"
                  // onChange={(e) => setCode(e.target.code)}
                  {...register("code", {
                    required: "Coupon code is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.code?.message}</p>
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
                    required: "By percent is required"
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.percent?.message}</p>
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
                    required: "By currency is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.currency?.message}</p>
            </div>
            
            <div className="flex gap-4 justify-center mt-4">
              <button type="reset" className="py-3 px-12 bg-theme-gray text-black">
                RESET
              </button>
              <button onClick={handleAddCoupons} type="submit" className="py-3 px-12 bg-secondary text-white">
                {isSubmitting ? "Submitting...": "ADD NEW"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
// disabled={isLoading || isSubmitting} 