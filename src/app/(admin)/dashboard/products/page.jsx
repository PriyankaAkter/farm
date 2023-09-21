'use client'
import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { DropDownMenuDemo } from "../products/components/DropDown";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";


const fetchCategory = ()=> {
  return  axios.get(`/api/product`)
}

// const fetchCategory = async (id)=> {
//   const res = await axios.get(`/api/product/edit/${id}`)
//   console.log({res});
//   return  res.data
// }

const page = () => {
  // const data1 = useMemo(() => products, []);
   const {isLoading,data,isError,error,refetch} = useQuery({
    queryKey:['product-data'], 
    queryFn: fetchCategory
  })
  // const { id } = params;
  // const {isLoading,data,isError,error} = useQuery({
  //   queryKey:['product-data', id], 
  //   queryFn: () => fetchCategory(id)
  // })
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }

  // console.log({data})
  const columns = [
    // {
    //   header: "ID",
    //   accessorKey: "id",
    // },
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
      cell: ({row}) => {
        // console.log({row});
        return <DropDownMenuDemo row={row.original} type="products"  />;
        
      }
    },
  ];

  return (
    <div className="container1 py-10">
      <div>
      {/* <DialogDemo /> */}
        <Header title="Products" subTitle="Product Listings" />
      </div>
      <Link href="/dashboard/products/addNewProducts" className="flex justify-end">
        <button className="bg-secondary py-4 px-10  flex items-center gap-1">
          <AiOutlinePlus className="text-white w-6 h-6" /><span className="text-white text-base font-semibold "> NEW PRODUCT</span> 
        </button>
        
      </Link>
      <div className="flex mt-8 my-24">
        <div className="flex-1">
          <form className="grid grid-cols-4 gap-4">
            <div>
              <select
                id="option"
                name="option"
                className="block w-full  bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Select Category</option>
                <option value="option2">Clothing & Apparel</option>
                <option value="option3">Clothing & Apparel</option>
              </select>
            </div>
            <div>
              <select
                id="option"
                name="option"
                className="block w-full bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Product Type</option>
                <option value="option2">Simple Product</option>
                <option value="option3">Groupped product</option>
              </select>
            </div>
            <div>
              <select
                id="option"
                name="option"
                className="block w-full bg-none border py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="option1">Status</option>
                <option value="option2">Active</option>
                <option value="option3">Inactive</option>
              </select>
            </div>
            <button className="bg-theme-gray py-4 px-10 text-black text-base font-semibold flex items-center gap-1 w-fit">
              <AiOutlineFilter className="w-4 h-4" /> FILTER
            </button>
          </form>
        </div>
        <div className="flex items-center justify-between w-1/4 border px-4 py-2 ">
          <input type="text" placeholder="Search product" className="text-xl border-none" />
          <BsSearch className="text-primary w-5 h-5 " />
        </div>
      </div>
      <div>
        <BasicTable data1={data.data} columns={columns} />
      </div>
    </div>
  );
};

export default page;
