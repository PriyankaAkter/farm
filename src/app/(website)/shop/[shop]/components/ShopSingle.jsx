"use client";
import NewsLetter from "@/website/components/layout/newsletter/NewsLetter";
import HeroSection from "@/website/components/shared/HeroSection";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import { products } from "@/website/components/views/home/data";
import Card from "@/website/components/layout/card/Card";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addCart } from "@/redux//cartAddSlice";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchCategory = () => {
  return axios.get(`/api/product`);
};
const ShopSingle = ({ shop, service }) => {
  // const { replace, push } = useRouter();

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
  // const product = {
  //   id: data.data?.id,
  //   name: data.data?.name,
  //   slug: data.data?.slug,
  //   reg_price: data.data?.reg_price,
  //   dis_price: data.data?.dis_price,
  //   quantity: 1,
  //   img: data.data?.img,
  // };
 


//   const product = {
//     id: shop?.id,
//     name: shop?.name,
//     price: shop?.price,
//     quantity: 1,
//     images: [shop?.image],
//     discount: shop.discount,
//   };
//  const dispatch = useDispatch()
  // const dispatch=useDispatch()
  // const pathName = usePathname()
  // const [items,setItems] = useState(0)
  const backgroundImage = "/assests/images/home/BannerShopS.jpg";
  // const sliceProducts = products.filter(
  //   (item) => item.category.slug == "vegetable"
  // );
  // const products = useSelector((state) => state.cart.products);
  // console.log({products});
  return (
    <div>
      <HeroSection title="Shop Single" backgroundImage={backgroundImage} />

      <div className="w-full px-5 sm:px-8 2xl:w-[1337px] mx-auto flex flex-col xl:flex-row gap-20 items-center py-8 lg:py-32">
        <div className="rounded-2xl bg-theme-white lg:px-16 w-full sm:w-[600px] h-[300px] sm:h-[450px] relative">
          <Image alt="Images" src={shop.img} fill objectFit="contain" />
        </div>

        <div>
          <h3>{shop.name}</h3>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <AiFillStar key={i} className="text-[#FFA858]" />
            ))}
          </div>
          <div className="flex gap-2 items-center mb-7">
            <s className="text-base text-[#B8B8B8] font-semibold">
              {shop.reg_price}
            </s>
            <p className="text-primary font-bold">{shop.dis_price}</p>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-9">
            
            <div className="flex gap-5">
              <button className="flex items-center text-base lg:text-[20px] py-5 sm:py-7 px-8 sm:px-11 rounded-2xl text-primary  font-bold font-roboto border border-primary">
              <span className="text-xl font-bold text-primary">{shop.quantity}</span>
              </button>
              <button
                // onClick={() => {
                //   dispatch(addCart(product))
                // }}
                className="flex gap-2 w-fit items-center text-base lg:text-[20px] px-5 lg:py-7 lg:px-11 rounded-2xl text-white bg-primary  font-bold font-roboto"
              >
                <span>Add To Cart</span>
                <BiRightArrowAlt className="text-white bg-primary rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:w-[1137px] 2xl:mx-auto container text-center">
        <div className="flex flex-col items-center lg:flex-row gap-5  lg:justify-center mb-7">
          <button className="w-fit py-6 px-14 bg-primary text-white rounded-2xl">
            Production Description
          </button>
          <button className="w-fit py-6 px-14 bg-[#EFF6F1] text-primary rounded-2xl">
            Additional Info
          </button>
        </div>
        <p>
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className="container">
        <h2 className="text-center mb-10 mt-36">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mb-20">
          {service?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default ShopSingle;
