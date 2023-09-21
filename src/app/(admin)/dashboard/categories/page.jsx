"use client";
import { useSearchParams } from "next/navigation";
import Header from "@/admin/dashboard/components/layout/Header";
import Filter from "@/admin/dashboard/components/layout/Filter";
import { AiOutlinePlus } from "react-icons/ai";
import BasicTable from "@/app/reactTable/components/BasicTable";
import { useForm } from "react-hook-form";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { DropDownMenuDemo } from "./components/DropDown";
import axios from "axios";

const fetchCategory = ()=> {
  return  axios.get(`/api/categories`)
}
const page = () => {
  const form = useForm();
  const {isLoading,data,isError,error} = useQuery({
    queryKey:['category-data'], 
    queryFn: fetchCategory
  })
  // const { id } = params;
  // const {isLoading,data,isError,error} = useQuery({
  //   queryKey:['product-data', id], 
  //   queryFn: () => fetchCategory(id)
  // })
  if(isLoading)
  {
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>{error.message}</h2>
  }
  // const searchParams = useSearchParams();

  // const edit = searchParams.get("edit");
  // console.log({ edit });
  // const categoryResult = useQuery({
  //   queryKey: ["single-category"],
  //   enabled: Boolean(edit),
  //   queryFn: async () => {
  //     const { data } = await axios.get(`/api/categories/${edit}}`);
  //     return data;
  //   },
  // });

  // console.log(categoryResult?.data);
 

  
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  // const onSubmit = async (data) => {
  //   console.log("Form submitted...", data);
  //   axios
  //     .post("/api/categories", data)
  //     .then((res) => {
  //       console.log({ res });
  //     })
  //     .catch((err) => console.log({ err }));
  // };
  // const queryClient = useQueryClient();
  // queryClient.invalidateQueries({ queryKey: ["category-data"] });
  // const handleAddCategory = () => {
  //   console.log({name, slug, description});
  // }

  // const category = useQuery({
  //   queryKey: ["category-data"],
  //   queryFn: async () => {
  //     const { data } = await axios.get(`/api/categories`);
  //     return data;
  //   },
  // });
  // if (category?.isLoading) {
  //   return <h2>Loading...</h2>;
  // }
  // if (category?.isError) {
  //   return <h2>{error.message}</h2>;
  // }

  // console.log(category?.data);

  const columns = [
    {
      header: "Category Name",
      accessorKey: "name",
    },
    {
      header: "Category Slug",
      accessorKey: "slug",
    },
    {
      header: "Description",
      accessorKey: "description",
    },

    {
      header: "Date",
      accessorKey: "createdAt",
    },
    {
      header: "Action",
      accessorKey: "action",
      cell: ({row}) => {
        // console.log({row});
        return <DropDownMenuDemo row={row.original}   />;
        
      }
    },
  ];

  return (
    <div className="container1 py-10">
      <div>
        <Header title="Categories" subTitle="farmet Customers" />
      </div>
      <div className="flex mt-8 my-24">
        <Filter />
        <div className="flex gap-3">
          <div className="flex ">
            <button className="bg-secondary py-4 px-10 text-white text-base font-semibold flex items-center gap-1">
              <AiOutlinePlus className="text-white w-6 h-6" /> ADD CATAGORIES
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-20">
        <BasicTable data1={data?.data} columns={columns} />
        <div className="w-[500px]">
          <h6>NEW CATAGORIES</h6>
          <form
            
            noValidate
            className="flex gap-4 flex-col"
          >
            <div className="grid gap-3">
              <label htmlFor="name" className="text-base">
                Category Name
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  // onChange={(e) => setName(e.target.name)}
                  {...register("name", {
                    required: " Category Name is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.name?.message}</p>
            </div>

            <div className="grid gap-3">
              <label htmlFor="slug" className="text-base">
                Category Slug
              </label>
              <div>
                <input
                  type="text"
                  id="slug"
                  // onChange={(e) => setSlug(e.target.slug)}
                  {...register("slug", {
                    required: "By slug is required",
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.slug?.message}</p>
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
                  rows={8}
                  // onChange={() => setDescription(e.target.description)}
                  placeholder="Enter product description"
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <button
                type="reset"
                className="py-3 px-12 bg-theme-gray text-black"
              >
                RESET
              </button>
              <button
                disabled={isLoading || isSubmitting}
                type="submit"
                className="py-3 px-12 bg-secondary text-white"
              >
                {isSubmitting ? "Submitting..." : "ADD NEW"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
