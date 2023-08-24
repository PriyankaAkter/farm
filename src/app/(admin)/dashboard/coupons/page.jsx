"use client";
import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import { useMemo } from "react";
import { coupons } from "@/app/(website)/components/views/home/data";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { useForm } from "react-hook-form";

const page = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  const data1 = useMemo(() => coupons, []);
  const columns = [
    {
      header: "Code",
      accessorKey: "code",
      width:200
    },
    // {
    //     header: "Name",
    //     accessorFn: row=> `${row.first_name} ${row.last_name}`
    // },
    {
      header: "Percent",
      accessorKey: "percent",
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
      header: "Currency",
      accessorKey: "currency",
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
        <Header title="Coupons" subTitle="farmet Coupons Listing" />
      </div>
      {/* <div className="flex justify-end">
      <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
        <AiOutlinePlus className="text-white w-6 h-6" /> NEW PRODUCT
      </button>
    </div> */}
      <div className="flex gap-10 mt-20">
        <BasicTable data1={data1} columns={columns} />
        <div className="w-[500px]">
          <h6>NEW COUPON</h6>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex gap-4 flex-col">
            <div className="grid gap-3">
              <label htmlFor="coupon" className="text-base">
                Coupon Code
              </label>
              <div>
                <input
                  type="text"
                  id="coupon"
                  placeholder="placeholder"
                  {...register("coupon", {
                    required: {
                      value: true,
                      message: "Coupon is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.coupon?.message}</p>
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
                    required: {
                      value: true,
                      message: "By percent is required",
                    },
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
                    required: {
                      value: true,
                      message: "By currency is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.currency?.message}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="date" className="text-base">
                Expired Date
              </label>
              <div>
                <input
                  type="text"
                  id="date"
                  {...register("currency", {
                    required: {
                      value: true,
                      message: "Expired Date is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.date?.message}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="date" className="text-base">
                Description
              </label>
              <div>
                <textarea
                  className="border border-theme-gray w-full pl-4 py-4"
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Enter product description"
                  {...register("description")}
                ></textarea>
                {/* <input
                  type="text"
                  id="date"
                  
                  {...register("currency", {
                    required: {
                      value: true,
                      message: "Expired Date is required",
                    },
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                /> */}
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <button className="py-3 px-12 bg-theme-gray text-black">
                RESET
              </button>
              <button className="py-3 px-12 bg-secondary text-white">
                ADD NEW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
