
import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useMemo } from "react";
import { products } from "@/app/(website)/components/views/home/data";

const page = () => {
  const data1 = useMemo(() => products, []);
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

    // {
    //   header:"Name",
    //   columns: [
    //     {
    //         header: "Fast Name",
    //         accessorKey: "first_name",
    //       },
    //       {
    //         header: "Last Name",
    //         accessorKey: "last_name",
    //       },
    //   ]
    // },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Discount",
      accessorKey: "discount",
    },
    {
      header: "Category",
      accessorKey: "category.name",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Action",
      accessorKey: "action",
    },
  ];

  return (
    <div className="container1 py-10">
      <div>
        <Header title="Products" subTitle="Product Listings" />
      </div>
      <div className="flex justify-end">
        <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
          <AiOutlinePlus className="text-white w-6 h-6" /> NEW PRODUCT
        </button>
      </div>
      <div className="flex mt-8 my-24">
        <div className="flex-1">
          <form class="grid grid-cols-4 gap-4">
            <div>
              <select
                id="option"
                name="option"
                class="block w-full  bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                class="block w-full bg-none border py-4 pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                class="block w-full bg-none border py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
        <BasicTable data1={data1} columns={columns} />
      </div>
    </div>
  );
};

export default page;
