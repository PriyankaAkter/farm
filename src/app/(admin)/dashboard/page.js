'use client'
import { SideBar } from "@/admin/dashboard/components/layout/slideBar/SideBar";
import Header from "./components/layout/Header";
import { SlCalender } from "react-icons/sl";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineDown,
} from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import { useMemo } from "react";
import { orders } from "@/app/(website)/components/views/home/data";
import BasicTable from "@/app/reactTable/components/BasicTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { DropDownMenuDemo } from "./categories/components/DropDown";


const fetchCategory = ()=> {
  return  axios.get("/api/product")
}

export default function Home() {
  // const data1 = useMemo(() => orders, []);
  const {isLoading,data,isError,error,refetch} = useQuery({
    queryKey:['product-data'], 
    queryFn: fetchCategory
  })
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  const columns = [
    {
      header: "Product Image",
      accessorKey: "img",
      
      cell: (info ) => {
        const image = info.getValue()
        return (
          <div className="flex justify-center items-center">
            <Image alt='product' src={image} height={60} width={60} />
          </div>
        );
   
        
      }
      
    },
   
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Product slug",
      accessorKey: "slug",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Price",
      accessorKey: "reg_price",
    },
    {
      header: "Discount",
      accessorKey: "dis_price",
    },
    
       {
        header: "Date",
        accessorKey: "createdAt",
      },
    {
      header: "Action",
      accessorKey: "action",
      // cell: () => {
      //   return <DropDownMenuDemo  />;
        
      // }
    },
  ];
  return (
    <main className="container1 py-10">
      <div>
        <Header title="Dashboard" subTitle="Everything here" />
      </div>
      <div className="flex gap-10 mt-20">
        <div className="w-5/6 ">
          <div></div>
          <div>
            <h4>Recent Orders</h4>
          <BasicTable data1={data.data} columns={columns} />
          </div>
        </div>
        <div className="w-[320px] flex-shrink-0 grid gap-8">
          <div className="flex justify-between items-center">
            <h4>Statics</h4>
            <div className="flex justify-between items-center gap-5">
              <SlCalender />
              <p>Last 30 days</p>
              <AiOutlineDown />
            </div>
          </div>
          <div className="grid gap-8">
            <div className="flex  gap-10 items-center bg-[#fcf9ef] p-10 rounded-3xl">
              <div className="bg-white rounded-lg p-4">
                <BsCart3 className="text-secondary w-6 h-6 " />
              </div>
              <div className="">
                <p className="opacity-60 text-[16px]">Orders</p>
                <div className="flex justify-between items-center gap-2">
                  <h4 className="text-2xl">254</h4>
                  <AiOutlineArrowUp className="w-5 h-5 text-secondary" />
                  <p className="text-[16px] text-secondary">12.5%</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 items-center bg-[#f9ece5] p-10 rounded-3xl">
              <div className="bg-white rounded-lg p-4">
                <BsCart3 className="text-secondary w-6 h-6 " />
              </div>
              <div className="">
                <p className="opacity-60 text-[16px]">Revenue</p>
                <div className="flex justify-between items-center gap-2">
                  <h4 className="text-2xl">$6,260</h4>
                  <AiOutlineArrowUp className="w-5 h-5 text-secondary" />
                  <p className="text-[16px] text-secondary">7.1%</p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 items-center bg-[#f0f5e7] p-10 rounded-3xl">
              <div className="bg-white rounded-lg p-4">
                <BsCart3 className="text-secondary w-6 h-6 " />
              </div>
              <div className="">
                <p className="opacity-60 text-[16px]">Revenue</p>
                <div className="flex justify-between items-center gap-2">
                  <h4 className="text-2xl">$2,567</h4>
                  <AiOutlineArrowDown className="w-5 h-5 text-red-600" />
                  <p className="text-[16px] text-red-600">0.32%</p>
                </div>
              </div>
            </div>
          </div>
          <h4>Top Countries</h4>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex gap-7  items-start">
              <div className="w-1 h-1 bg-green-900 rounded-full mt-2"></div>
              <div className="">
                <p className="text-[16px]">United States</p>
                <p className="font-bold text-[16px]">80%</p>
              </div>
            </div>
            <div className="flex gap-7  items-start">
              <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-[16px]">United Kingdom</p>
                <p className="font-bold text-[16px]">65%</p>
              </div>
            </div>
            <div className="flex gap-7  items-start">
              <div className="w-1 h-1 bg-secondary rounded-full mt-2"></div>
              <div className="">
                <p className="text-[16px]">Germany</p>
                <p className="font-bold text-[16px]">65%</p>
              </div>
            </div>
            <div className="flex gap-7 items-start">
              <div className="w-1 h-1 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-[16px]">Russia</p>
                <p className="font-bold text-[16px]">35%</p>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[200px]">
            <Image src="/assests/images/admin/map.png" fill alt="map" />
          </div>
          <p className="opacity-80 text-[16px]">We only started collecting region data from January 2015</p>
        </div>
      </div>
    </main>
  );
}
