"use client";
import { products } from "./data";
import ButtonOne from "../../shared/ButtonOne";
import Card from "../../layout/card/Card";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategory = () => {
  return axios.get(`/api/product`);
};
const HomeProducts = () => {
  // const sliceProducts = products.slice(0, 8);
  // console.log({ sliceProducts });

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["product-data"],
    queryFn: fetchCategory,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  const sliceProducts = data.data?.slice(0, 8);
  console.log({ sliceProducts });
  // console.log(data);

  return (
    <div className="container py-20 lg:py-44 ">
      <div className="text-center mb-10">
        <span className="display">Categories </span>
        <h2 className="text-primary">Our Products</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {sliceProducts?.map((item, index) => (
          <Card  item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;


// {data.data?.map((item, index) => (
//   <div className="rounded-2xl bg-theme-white pt-[30px] pl-[30px] pb-[17px] pr-[26px] w-full">
//     <span className="text-white text-base font-openSans px-3 py-1 bg-primary rounded-lg inline-block">
//       {item.slug}
//     </span>
//     <div className="grid sm:place-items-center">
//       <div className="w-full sm:w-[280px] h-[324px] relative">
//         <Image
//           src={item.img}
//           fill
//           className="object-contain"
//           alt="brocoli"
//         />
//       </div>
//     </div>

//     <div className="flex justify-between items-center">
//       <Link
//         href={`/shop/${item.name}`}
//         className="text-primary text-xl font-roboto font-semibold mb-3 inline-block"
//       >
//         {item.name}
//       </Link>
//       <button
//         className="text-lg"
//         // onClick={() => {
//         //   dispatch(addCart(product));

//         // }}
//       >
//         <BsCartPlus className="w-7 h-7 text-secondary" />
//         {/* {!isExist ? (
//     <BsCartPlus className="w-7 h-7 text-secondary" />
//   ) : (
//     <BsCartCheckFill className="w-7 h-7 text-secondary" />
//   )} */}
//       </button>
//     </div>

//     <hr className="mb-2" />
//     <div className="flex justify-between items-center">
//       <div className="flex gap-2 items-center ">
//         <s className="text-base text-[#B8B8B8] font-semibold">
//           {item.reg_price}
//         </s>
//         <p className="text-primary font-bold">{item.des_price}</p>
//       </div>
//       <div className="flex">
//         {[1, 2, 3, 4, 5].map((i) => (
//           <AiFillStar key={i} className="text-[#FFA858]" />
//         ))}
//       </div>
//     </div>
//   </div>
// ))}
