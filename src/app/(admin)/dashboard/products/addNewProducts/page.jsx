"use client";
import Header from "../../components/layout/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

const page = () => {
  const form = useForm()
  const [image, setImage] = useState();
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  // Upload Image
  const preset_key = "inqobhib";
  const cloud_name = "dvbkbxen4";
  //cloud_key = "524666485458885"

  const handleFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);

    return await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) => res.data.secure_url)
      .catch((err) => console.log(err));
  };
  console.log({ image });
  // console.log({product});



  //for adding data from form
  const onSubmit = async (data) => {
    console.log("Form submitted...", data);
    axios
      .post("http://localhost:3000/api/product", data)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['product-data'] })
  const handleAddCategory = () => {
    console.log({name, slug, reg_price, dis_price, img, quantity});
  }
  
  

  return (
    <div className="container1 py-10">
      <div>
        <Header title="New Product" subTitle="Add new product" />
      </div>
      <div className="container1 py-10">
      <form noValidate className=" mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full grid gap-4 grid-cols-2 ">
          <div className="border border-theme-gray">
          <h4 className="bg-secondary py-5 pl-10">General</h4>
            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="name" className="text-base">
                Product Name
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter product name..."
                  {...register("name", {
                    required: "Product Name is required"
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.name?.message}</p>
            </div>

            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="slug" className="text-base">
                Product Slug
              </label>
              <div>
                <input
                  type="text"
                  id="slug"
                  placeholder="Enter product slug..."
                  {...register("slug", {
                    required: "Slug is required"
                  })}

                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.slug?.message}</p>
            </div>

            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="slug" className="text-base">
                Category
              </label>
              <div>
                
                <input
                  type="text"
                  id="category"
                  placeholder="Enter product category..."
                  {...register("category", {
                    required: "category is required"
                  })}

                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.category?.message}</p>
            </div>

            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="regular_price" className="text-base">
                Regular Price
              </label>
              <div>
                <input
                  type="text"
                  id="reg_price"
                  {...register("reg_price", {
                    required: true
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.regular_price?.message}</p>
            </div>

            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="sale_price" className="text-base">
                Sale Price
              </label>
              <div>
                <input
                  type="text"
                  id="dis_price"
                  {...register("dis_price", {
                    required: true
                  })}                  
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.sale_price?.message}</p>
            </div>

            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="quantity" className="text-base">
                Quantity
              </label>
              <div>
                <input
                  type="text"
                  id="quantity"
                  {...register("quantity", {
                    required: true
                  })}
                  className="border border-theme-gray w-full pl-4 py-4"
                />
              </div>
              <p className="text-red-500">{errors.quantity?.message}</p>
            </div>
          </div>
          <div className="w-full border border-theme-gray">
          <h4 className="bg-secondary py-5 pl-10">Product Image</h4>
            <div className="grid gap-3 px-10 py-4">
              <label htmlFor="productgallery" className="text-base">
                Product Image
              </label>
              <div className="border border-theme-gray py-2 pl-2">
                <input
                  type="file"
                  name="img"
                  onChange={async (e) => {
                    const url = await handleFile(e);
                    setImage(url);
                    form.setValue("img", url);
                  }}
                />
                {image &&  (
                  <img src={image} width={400} height={400} alt="product" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 justify-center mt-12">
            <button
              type="reset"
              className="py-3 px-12 bg-theme-gray text-black"
            >
              RESET
            </button>
            <button
            onClick={()=>{
              console.log({name, slug, reg_price, });
            }} 
              type="submit"
              className="py-3 px-12 bg-secondary text-white"
            >
              {isSubmitting ? "Submitting...": "ADD NEW"}
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default page;
