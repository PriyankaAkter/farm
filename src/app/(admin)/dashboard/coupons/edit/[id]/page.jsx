"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import Header from "../../../components/layout/Header";
// import UpdateCoupon from "../../components/UpdateCoupon"
import UpdateCoupon from "../../components/UpdateCoupon"
const fetchCoupon = async (id) => {
  const res = await axios.get(`/api/coupons/${id}`);
  return res.data;
};
const page = ({ params }) => {
  const { id } = params;
  console.log({id});
  const { isLoading, data, isError, error } = useQuery({
    queryKey: [['coupons-data'], id],
    queryFn: () => fetchCoupon(id),
  });

  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ['coupons-data'] });
  console.log({data});
  // const form = useForm({
  //   defaultValues: {
  //     name: data?.name,
  //     slug: data?.slug,
  //     description: data?.description,
  //   },
  // });

  

  //for adding data from form
  // const onSubmit = async (data) => {
  //   console.log("Form submitted...", data);
  //   axios
  //     .post(`/api/categories/${id}`, data)
  //     .then((res) => {
  //       console.log({ res });
  //     })
  //     .catch((err) => console.log({ err }));
  // };

  

  return (
    <div className="container1 py-10">
      <div>
        <Header title="Update Coupon" subTitle="" />
      </div>

     <UpdateCoupon coupon={data} />
     
    </div>
  );
};

export default page;
