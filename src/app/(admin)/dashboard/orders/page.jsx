import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import { CiExport } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { useMemo } from "react";
import { orders } from "@/app/(website)/components/views/home/data";

const page = () => {
  const data1 = useMemo(() => orders, []);
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
      // maxWidth: 170,
      // minWidth: 150,
      maxSiz: 300,
    },

    {
      header: "Date",
      accessorKey: "date",
      width: 200,
    },

    {
      header: "Product",
      accessorKey: "product",
    },
    {
      header: "Payment",
      accessorKey: "payment",
    },
    {
      header: "Fullfillment",
      accessorKey: "fullfillment",
    },
    {
      header: "Total",
      accessorKey: "total",
    },
    {
      header: "Action",
      accessorKey: "action",
    },
  ];

  return (
    <div className="container1 py-10">
      <div>
        <Header title="Orders" subTitle="farmet orders listings" />
      </div>

      <div className="flex mt-8 my-24">
        <Filter />
        <div className="flex gap-3">
          <div className="flex ">
            <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
              <AiOutlinePlus className="text-white w-6 h-6" /> NEW ORDER
            </button>
          </div>
          <div className="flex">
            <button className="bg-theme-gray py-4 px-10 text-black text-base font-semibold flex items-center gap-1 w-fit">
              <CiExport className="w-4 h-4" /> EXPORT
            </button>
          </div>
        </div>
      </div>
      <BasicTable data1={data1} columns={columns} />
    </div>
  );
};

export default page;
