"use client";
import Header from "@/admin/dashboard/components/layout/Header";
import { useForm } from "react-hook-form";

const page = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };
  return (
    <div className="container1 py-10">
      <div>
        <Header title="Settings" subTitle="Account Settings" />
      </div>
      <div className="w-3/4 mt-20">
        <h6 className="mb-4">ACCOUNT SETTINGS</h6>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex gap-4 flex-col"
        >
            <div className="w-full grid grid-cols-2 gap-10">
          <div className="grid gap-3">
            <label htmlFor="coupon" className="text-base">
              Full Name
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
                className="border w-full border-theme-gray  pl-4 py-4"
              />
            </div>
            <p className="text-red-500">{errors.coupon?.message}</p>
          </div>

          <div className="grid gap-3">
            <label htmlFor="percent" className="text-base">
              Display Name
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
                className="border w-full border-theme-gray  pl-4 py-4"
              />
            </div>
            <p className="text-red-500">{errors.percent?.message}</p>
          </div>
          </div>
          <div>
            <label htmlFor="email" className="text-base">
              Email
            </label>
            <input
              type="email"
              id="percent"
              {...register("email", {
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                },
              })}
              className="border border-theme-gray w-full pl-4 py-4"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="w-full grid grid-cols-2 gap-10">
          <div className="grid gap-3">
            <label htmlFor="currency" className="text-base">
              Role
            </label>
            <div>
              <input
                type="text"
                id="role"
                {...register("role", {
                  required: {
                    value: true,
                    message: "Role is required",
                  },
                })}
                className="border border-theme-gray w-full pl-4 py-4"
              />
            </div>
            <p className="text-red-500">{errors.role?.message}</p>
          </div>
          <div className="grid gap-3">
            <label htmlFor="date" className="text-base">
              Address
            </label>
            <div>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                })}
                className="border border-theme-gray w-full pl-4 py-4"
              />
            </div>
            <p className="text-red-500">{errors.address?.message}</p>
          </div>
          </div>
          <div className="grid gap-3">
            <label htmlFor="date" className="text-base">
              bIO
            </label>
            <div>
              <textarea
                className="border border-theme-gray w-full pl-4 py-4"
                name=""
                id=""
                cols="30"
                rows="8"
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
              CANCEL
            </button>
            <button className="py-3 px-12 bg-secondary text-white">
              UPDATE PROFILE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
