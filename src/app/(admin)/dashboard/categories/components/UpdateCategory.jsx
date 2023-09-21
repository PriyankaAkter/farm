"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

// const fetchCategory = ()=> {
//   return  axios.get("/api/product")
// }

const UpdateCategory = ({ category }) => {
  const categoryId = category.id;

  //   console.log({categoryId});
  const form = useForm({
    defaultValues: {
      name: category.name,
      slug: category.slug,
      description: category.description,
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
  const onSubmit = async (category) => {
    // console.log("Form submitted...", category);
    axios
      .post(`/api/categories/edit/${categoryId}`, category)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["category-data"] });

  return (
    <div className="w-[500px] py-10 mx-auto">
      <form noValidate onSubmit={handleSubmit(onSubmit)} className=" mt-20">
        <div className="grid gap-3">
          <label htmlFor="name" className="text-base">
            Category Name
          </label>
          <div>
            <input
              type="text"
              id="name"
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
              placeholder="Enter product description"
              {...register("description")}
            ></textarea>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <button type="reset" className="py-3 px-12 bg-theme-gray text-black">
            RESET
          </button>
          <button type="submit" className="py-3 px-12 bg-secondary text-white">
            {isSubmitting ? "Submitting..." : "UPDATE"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCategory;
