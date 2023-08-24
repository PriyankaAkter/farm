import React from "react";
import Image from "next/image";
import { Data } from "@/website/components/views/home/data";
const AboutChoose = () => {
  return (
    <div className="lg:px-24 py-8 lg:py-48 bg-theme-white w-screen">
      
        <div className="grid grid-cols-1 gap-8  2xl:grid-cols-2 2xl:gap-16 place-items-center container">
          <div className="w-full 2xl:w-[671px]">
            <div className="grid justify-items-center md:justify-items-start text-center md:text-left">
              <span className="display mb-2 inline-block">Why Choose us?</span>
              <h2 className="text-primary mb-6">
                We do not buy from the open market & traders.
              </h2>
              <p className="mb-12">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard the 1500s, when
                an unknown
              </p>
            </div>

            <div className="mb-4 flex items-center gap-2 w-full sm:w-[300px] bg-[#ECECEC] py-5 lg:py-7 pl-7  rounded-full">
              <div className="w-5 h-5 border-2 border-secondary rounded-full"></div>
              <h6 className="text-base lg:text-xl">100% Natural Product</h6>
            </div>
            <p className="ml-16 mb-6">
              Simply dummy text of the printing and typesetting <br />
              industry Lorem Ipsum
            </p>
            <div className="mb-4 flex items-center gap-2 w-full sm:w-[300px] bg-[#ECECEC] py-5 lg:py-7 pl-7  rounded-full">
              <div className="w-5 h-5 border-2 border-secondary rounded-full"></div>
              <h6 className="text-base lg:text-xl">Increases resistance</h6>
            </div>
            <p className="ml-16 mb-6">
              Filling, and temptingly healthy, our Biona Organic ,<br />
              Granola with Wild Berries is just the thing
            </p>
          </div>

          <div className="w-full lg:w-[600px] h-[332px] lg:h-[579px] relative ">
            <Image
              src="/assests/images/about/about3.png"
              fill
              className="object-cover rounded-2xl lg:rounded-t-2xl"
              alt="Images"
            />
          </div>
        </div>
      
      <div className="px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 xl:grid-cols-4 2xl:w-[1118px]  md:mx-auto  pt-12 lg:pt-24">
          {Data.map((item, index) => (
            <div
              key={index}
              className="bg-white px-4 pt-12 pb-4 rounded-3xl grid justify-items-center gap-3"
            >
              <div className="w-24 h-24 relative bg-theme-white rounded-2xl grid place-items-center">
                <Image src={item.image} alt="Images" width={46} height={46} />
              </div>
              <h6>{item.title}</h6>
              <p className="text-center">{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutChoose;
