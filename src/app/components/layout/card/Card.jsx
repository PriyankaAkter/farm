"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import { BsCartCheck, BsCartCheckFill, BsCartPlus } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "@/app/reduxt_store/cartAddSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const product = {
    id: item?.id,
    name: item?.name,
    price: item?.price,
    quantity: 1,
    images: [item?.image],
    discount: item.discount,
  };
  const cart = useSelector((state) => state.cart.products);
  const isExist = cart.find((item) => item.id == product.id);
  return (
    <div className="rounded-2xl bg-theme-white pt-[30px] pl-[30px] pb-[17px] pr-[26px] w-full">
      <span className="text-white text-base font-openSans px-3 py-1 bg-primary rounded-lg inline-block">
        {item.category.name}
      </span>
      <div className="grid sm:place-items-center">
        <div className="w-full sm:w-[280px] h-[324px] relative">
          <Image
            src={item.image}
            fill
            className="object-contain"
            alt={item.product ?? "No text"}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/shop/${item.slug}`}
          className="text-primary text-xl font-roboto font-semibold mb-3 inline-block"
        >
          {item.name}
        </Link>
        <button
          className="text-lg"
          onClick={() => {
            dispatch(addCart(product));
            
          }}
        >
          {!isExist ? (
            <BsCartPlus className="w-7 h-7 text-secondary" />
          ) : (
            <BsCartCheckFill className="w-7 h-7 text-secondary" />
          )}
        </button>
      </div>

      <hr className="mb-2" />
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center ">
          <s className="text-base text-[#B8B8B8] font-semibold">{item.price}</s>
          <p className="text-primary font-bold">{item.discount}</p>
        </div>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <AiFillStar key={i} className="text-[#FFA858]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
