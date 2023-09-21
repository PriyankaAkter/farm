'use client'
import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import { AiOutlinePlus } from "react-icons/ai";
import { customers } from "@/app/(website)/components/views/home/data";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { useMemo } from "react";
import CustomerForm from "./components/CustomerForm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



const fetchCustomer = ()=> {
  return  axios.get("/api/customers")
}
const page = () => {
    // const data1 = useMemo(() => customers, []);

    const {isLoading,data,isError,error} = useQuery({
      queryKey:['customers-data'], 
      queryFn: fetchCustomer
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
        header: "ID",
        accessorKey: "id",
      },
      // {
      //     header: "Name",
      //     accessorFn: row=> `${row.first_name} ${row.last_name}`
      // },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "District",
        accessorKey: "district",
      },
      {
        header: "City",
        accessorKey: "city",
      },
     
      {
        header: "Area",
        accessorKey: "area",
      },
      {
        header: "Phone Number",
        accessorKey: "phone",
      },
      {
        header: "Email Address",
        accessorKey: "email",
      },
      {
        header: "Created at",
        accessorKey: "createdAt",
      },
      {
        header: "Action",
        accessorKey: "action",
      },
    ];
  return (
    <div className="container1 py-10">
    <div>
      <Header title="Customers" subTitle="farmet Customers" />
    </div>
    <div className="flex mt-8 my-24">
        <Filter />
        <div className="flex gap-3">
          <div className="flex ">
            <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
              <AiOutlinePlus className="text-white w-6 h-6" /> ADD CUSTOMERS
            </button>
          </div>
          
        </div>
      </div>
    
    <div className="flex gap-10 mt-20">
        <BasicTable data1={data.data} columns={columns} />
        {/* <CustomerForm /> */}
      </div>
    
    
  </div>
  )
}

export default page