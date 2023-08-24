import React from "react";
import { AiFillStar } from "react-icons/ai";
import { products } from "@/website/components/views/home/data";

import Link from "next/link";
import Image from "next/image";
import Card from "../../components/layout/card/Card";

const ShopPost = () => {
  
  return (
    <div className="container">
      {/* <div className=" flex flex-col gap-32"> */}
      <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
    // </div>
  );
};

export default ShopPost;
