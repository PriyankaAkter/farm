"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";

// const fetchCategory = ()=> {
//   return  axios.get("/api/product")
// }

const AddNewProduct = ({product}) => {

  const productId = product.id

  console.log(product);
  const form = useForm({
defaultValues:{
  name:product.name,
  slug:product.slug,
  img:product.img,
  reg_price:product.reg_price,
  dis_price:product.dis_price,
  quantity:product.quantity

}
  });
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

  // const handleUpdate = () => {
    
  //   axios
  //     .put(`/api/product/edit/${product.id}`,product)
  //     .then((res) => {
  //       console.log({ res });
  //       queryclient.invalidateQueries("product-data");
  //     })
  //     .catch((err) => console.error);
  // };
  console.log({ image });
  console.log({product});



  //for adding data from form
  const onSubmit = async (product) => {
    console.log("Form submitted...", product);
    axios
      .post(`/api/product/edit/${productId}`, product)
      .then((res) => {
        console.log({ res });
      })
      .catch((err) => console.log({ err }));
  };
 
  const queryClient = useQueryClient()
  queryClient.invalidateQueries({ queryKey: ['product-data'] })
  

  return (
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
                {product?.img &&  (
                  <img src={product.img} width={400} height={400} alt="product" />
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
            
              type="submit"
              className="py-3 px-12 bg-secondary text-white"
            >
              {isSubmitting ? "Submitting...": "UPDATE"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};


export default AddNewProduct

