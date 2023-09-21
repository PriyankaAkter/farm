"use client";
import BasicTable from '@/app/reactTable/components/BasicTable';
import React,{useMemo} from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import {
  useReactTable,

  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const CouponTable = ({data1,columns}) => {
 
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: data1,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

// type Props ={
//     data:any
// }
// const fetchCoupon = ()=> {
//   return  axios.get("http://localhost:3000/api/coupons")
// }

// const columns = [
//   {
//     header: "Code",
//     accessorKey: "code",
//     width:200
//   },
//   {
//     header: "Percent",
//     accessorKey: "percent",
//   },
//   {
//     header: "Currency",
//     accessorKey: "currency",
//   },
//   {
//     header: "Created at",
//     accessorKey: "createdAt",
   
//   },
//   {
//     header: "Status",
//     accessorKey: "status",
//   },

//   {
//     header: "Action",
//     accessorKey: "action",
//   },
// ];
// function CouponTable({data1,columns}) {
//   const {isLoading,data,isError,error,refetch} = useQuery({
//     queryKey:['coupons-data'], 
//     queryFn: fetchCoupon
//   })
//   if(isLoading)
//   {
//     return <h2>Loading...</h2>
//   }
//   if(isError){
//     return <h2>{error.message}</h2>
//   }

    // const data1 = useMemo(() => data, []);
    
  return (
    <div className="w-full">
      {/* <div>
        <input className="border border-secondary"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div> */}

      <table className="w-full">
        <thead className="border-none">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-xl text-center text-primary"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="py-4 border-b-2"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted()] ?? null} */}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, 10)
            .map((row, index) => {
              const rowClass = index % 2 === 0 ? "bg-white" : "bg-gray-100";
              return (
                <tr
                  key={row.id}
                  className={`text-xl text-center text-primary ${rowClass}`}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className=" py-4">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="flex justify-between mt-20 items-center">
        <p>Show 10 in 30 items</p>
        <div className="mt-2 flex gap-2">
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
            className="bg-theme-gray px-4 py-3 hover:text-white hover:bg-secondary"
          >
            <IoIosArrowBack />
          </button>
          {/* <button
            onClick={() => table.setPageIndex(0)}
            className="bg-theme-gray px-4 py-3 hover:text-white hover:bg-secondary"
          >
            1
          </button>
          <button
            onClick={() => table.setPageIndex(1)}
            className="bg-theme-gray px-4 py-3 hover:text-white hover:bg-secondary"
          >
            2
          </button> */}

          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
            className="bg-theme-gray px-4 py-3 hover:text-white hover:bg-secondary"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CouponTable