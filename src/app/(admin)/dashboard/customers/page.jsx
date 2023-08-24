import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import { AiOutlinePlus } from "react-icons/ai";
import { customers } from "@/app/(website)/components/views/home/data";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { useMemo } from "react";

const page = () => {
    const data1 = useMemo(() => customers, []);
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
        header: "Phone Number",
        accessorKey: "phone",
      },
      {
        header: "Balances",
        accessorKey: "balances",
      },
      {
        header: "Total orders",
        accessorKey: "orders",
      },
      {
        header: "Created at",
        accessorKey: "created",
      },
      {
        header: "Status",
        accessorKey: "status",
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
    {/* <div className="flex justify-end">
      <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
        <AiOutlinePlus className="text-white w-6 h-6" /> NEW PRODUCT
      </button>
    </div> */}
    <BasicTable data1={data1} columns={columns} />
    
  </div>
  )
}

export default page