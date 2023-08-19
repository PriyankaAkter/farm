import Link from "next/link";
import React from "react";
// import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import ButtonOne from "./ButtonOne";

const News = ({ item }) => {
  return (
    <div
      style={{
        background: `url(${item?.image}) no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
      className={`relative w-full  rounded-2xl pt-12 h-[380px] lg:h-[480px]`}
    >
      <div className="absolute inset-x-4 w-20 h-20 bg-white flex justify-center items-center rounded-full py-4 px-[22px]">
        <h6 className="text-center">{item?.date}</h6>
      </div>
      <div className="w-11/12 left-1/2 -translate-x-1/2 translate-y-1/2 absolute bottom-10">
        <div
          className="py-6 lg:py-12  px-7 lg:px-14 bg-white rounded-3xl 
          shadow"
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-5">
            <div className="flex gap-2 items-center ">
              <BsFillPersonFill className={`w-5 h-5 text-secondary`} />
              <p>{item.name}</p>
            </div>
          </div>
          <h6 className="mb-2">{item.title}</h6>
          <p className="mb-2">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum
          </p>
          <ButtonOne
            href={`/blog/${item.slug}`}
            title="Read More"
            className="bg-theme-yellow"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
