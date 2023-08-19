import React from "react";
import { ButtonTwo } from "../../shared/ButtonTwo";
import Link from "next/link";

const NewsLetter = () => {
  return (
   <div className="container py-16">
<div className="rounded-none 2xl:rounded-2xl bg-[url('/assests/images/home/newsletter.png')] bg-cover bg-center bg-no-repeat px-8 py-[80px] lg:px-[71px] lg:py-[105px] ">
      <div className="flex justify-between items-center flex-col lg:flex-row ">
        <h2 className="text-white mb-4 text-center lg:text-left">Subscribe to <br />our Newsletter</h2>
        <form action="/" className="flex flex-col gap-7 md:flex-row  mb-4">
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-8 lg:px-11 py-4 lg:py-7 rounded-2xl text-base lg:text-[20px] font-bold text-white border-none  bg-white"
            />
          </div>
          <Link href="/" className="text-center"><ButtonTwo title="Subscribe" /></Link>
          
        </form>
        
      </div>
    </div>
   </div>
    
  );
};

export default NewsLetter;
