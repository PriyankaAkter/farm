"use client";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const BillingSingle = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;
  const onSubmit = async (data) => {
    console.log("Form submitted...", data);
    axios
      .post("/api/customers", data)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["customer-data"] });
  // const handleAddCustomers = () => {
  //   console.log({code, percent, currency});
  // }

  return (
    <div className="container py-10 2xl:py-[134px]">
      <div className=" bg-theme-white p-5 2xl:p-[68px]">
        <h5 className="mb-[11px]">Billing Details</h5>
        <hr className="mb-20 bg-primary" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="/"
          className="grid gap-12"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-3">
              <label htmlFor="name" className="text-base">
                Full Name
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="district" className="text-base">
                District
              </label>
              <div>
                <input
                  type="text"
                  id="district"
                  {...register("district", {
                    required: "District is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.district?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-3">
              <label htmlFor="city" className="text-base">
                Town/ City
              </label>
              <div>
                <input
                  type="text"
                  id="city"
                  {...register("city", {
                    required: "Town/City is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.city?.message}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="code" className="text-base">
                Postal code
              </label>
              <div>
                <input
                  type="number"
                  id="code"
                  {...register("code", {
                    required: "Postal code is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.code?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-3">
              <label htmlFor="area" className="text-base">
                Area
              </label>
              <div>
                <input
                  type="text"
                  id="area"
                  {...register("area", {
                    required: "Area is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.area?.message}</p>
            </div>
            <div className="grid gap-3">
              <label htmlFor="phone" className="text-base">
                Phone number
              </label>
              <div>
                <input
                  type="number"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.phone?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="grid gap-3">
              <label htmlFor="email" className="text-base">
                Email Address
              </label>
              <div>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            {/* <div className="grid gap-3">
              <label htmlFor="altPhone" className="text-base">
                Alternative Phone number
              </label>
              <div>
                <input
                  type="number"
                  id="altPhone"
                  {...register("altPhone", {
                    required: "Alternative Phone Number is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.altPhone?.message}</p>
            </div> */}
          </div>
          <div className="grid gap-3">
            <label htmlFor="optional" className="text-base">
              Notes about your order, special notes for delivery.
            </label>
            <div>
              <textarea
                className="border border-theme-gray w-full pl-4 py-4"
                name="optional"
                id="optional"
                cols="30"
                rows="10"
                placeholder="Notes about your order, special notes for delivery."
                {...register("optional")}
              ></textarea>
            </div>
          </div>
          {/* <button className="py-7 px-11 text-xl text-white bg-primary rounded-2xl w-fit">
            Checkout
          </button> */}
          <button type="submit" className="py-3 px-12 bg-secondary text-white">
            {isSubmitting ? "Submitting..." : "Checkout"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingSingle;

{
  /* <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex gap-4 flex-col">
            <div className="grid gap-3">
              <label htmlFor="code" className="text-base">
                Coupon Code
              </label>
              <div>
                <input
                  type="text"
                  id="code"
                  // onChange={(e) => setCode(e.target.code)}
                  {...register("code", {
                    required: "Coupon code is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.code?.message}</p>
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
                    required: "By percent is required"
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
                    required: "By currency is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.currency?.message}</p>
            </div>
            
            <div className="flex gap-4 justify-center mt-4">
              <button type="reset" className="py-3 px-12 bg-theme-gray text-black">
                RESET
              </button>
              <button onClick={handleAddCoupons} type="submit" className="py-3 px-12 bg-secondary text-white">
                {isSubmitting ? "Submitting...": "ADD NEW"}
              </button>
            </div>
          </form> */
}
