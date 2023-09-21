"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

// const fetchCategory = ()=> {
//   return  axios.get("/api/product")
// }

const UpdateCoupon = ({ coupon }) => {
  const couponId = coupon.id;

  //   console.log({couponId});
  const form = useForm({
    defaultValues: {
      code: coupon.code,
      percent: coupon.percent,
      currency: coupon.currency,
    },
  });
  // const form = useForm()

  // const handleUpdate = () => {

  //   axios
  //     .put(`/api/product/edit/${product.id}`,product)
  //     .then((res) => {
  //       console.log({ res });
  //       queryclient.invalidateQueries("product-data");
  //     })
  //     .catch((err) => console.error);
  // };

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;
  //for adding data from form
  const onSubmit = async (coupon) => {
    // console.log("Form submitted...", category);
    axios
      .post(`/api/coupons/edit/${couponId}`, coupon)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["coupons-data"] });

  return (
    <div className="w-[500px] mx-auto mt-40">
          <h6>UPDATE COUPON</h6>
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex gap-4 flex-col">
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
              <button type="submit" className="py-3 px-12 bg-secondary text-white">
                {isSubmitting ? "Submitting...": "UPDATE"}
              </button>
            </div>
          </form>
        </div>
  );
};

export default UpdateCoupon;
