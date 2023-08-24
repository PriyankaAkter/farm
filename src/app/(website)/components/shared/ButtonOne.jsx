import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { BiRightArrowAlt } from "react-icons/bi";
const ButtonOne = (props) => {
  return (
    <Link
      href={props.href}
      className={twMerge("flex gap-2 w-fit items-center text-base lg:text-[20px] lg:py-7 py-5 px-4 lg:px-11 rounded-2xl text-primary  font-bold font-roboto",
        props?.className
      )}
    > <span>{props.title}</span>
      <BiRightArrowAlt className={twMerge("text-white bg-primary rounded-full",
        props?.className1
      )}/>
    </Link>
  );
};

export default ButtonOne;
// className="text-white bg-primary rounded-full"
