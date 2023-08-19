"use client";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { data } from "@/app/components/views/home/data";
import { useMemo } from "react";
import { useState } from "react";

// {
//     id: 1,
//     first_name: "Priyanka",
//     last_name: "Akter",
//     email:"priyanka@gmail.com",
//     gender:"Female"
//   },
const BasicTable = () => {
  const data1 = useMemo(() => data, []);
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
      header: "Fast Name",
      accessorKey: "first_name",
    },
    {
      header: "Last Name",
      accessorKey: "last_name",
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
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
    },
  ];

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

  console.log(table);
  return (
    <div className="container grid justify-items-center">
      <h1>React Table</h1>
      <div>
        <input className="border border-secondary"
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>

      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="px-6 py-4"
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
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted()] ?? null}
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
            .map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="px-6 py-4">
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
      <div className="grid gap-2 grid-cols-4 justify-items-center mt-2">
        <button
          onClick={() => table.setPageIndex(0)}
          className="border border-secondary px-4 py-3"
        >
          First Page
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="border border-secondary px-4 py-3"
        >
          Previous Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="border border-secondary px-4 py-3"
        >
          Next Page
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-4 py-3 border border-secondary"
        >
          Last Page
        </button>
      </div>
      {/* <div className="grid gap-2 grid-cols-3 mt-4">
        <button onClick={()=> localStorage.setItem("name","Priyanka")} className="border border-secondary px-4 py-3">Set Item</button>
        <button onClick={()=>
          console.log(localStorage.getItem("name"))} className="border border-secondary px-4 py-3">Get Item</button>
        <button onClick={()=>localStorage.removeItem("name")} className="border border-secondary px-4 py-3">Remove Item</button>
      </div> */}
    </div>
  );
};

export default BasicTable;

// <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th onClick={()=>header.column.getToggleSortingHandler()} key={header.id} className="px-6 py-4">
//                   {header.isPlaceholder ? null : flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                   {
//                     {asc: '🔽', desc: '🔼'}[
//                       header.column.getIsSorted() ?? null
//                     ]
//                   }
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
