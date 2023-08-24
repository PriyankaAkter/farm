"use client";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { product } from "@/website/components/views/home/data";
import { useMemo } from "react";
import { useState } from "react";

// {
//     id: 1,
//     image: "/assests/images/home/brocoli.png",
//     name: "Calabrese Broccoli",
//     slug:"calabrese_broccoli",
//     alt: "vegetable",
//     price: 20.00,
//     discount: 13.00,
//     star: 5,
//     category: {
//       name:"Vegetable",
//       slug:"vegetable"
//   },
//   description: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
// },
const BasicTable = () => {
  const data1 = useMemo(() => product, []);
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
      header: "Price",
      accessorKey: "price",
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
      header: "Discount",
      accessorKey: "discount",
    },
    {
      header: "Categories",
      accessorKey: "category.name",
    },
    {
        header: "Date",
        accessorKey: "date",
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

//   console.log(table);
  return (
    <div className="container grid justify-items-center">
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
    </div>
  );
};

export default BasicTable;
