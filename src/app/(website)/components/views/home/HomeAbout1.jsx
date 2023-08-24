import Link from "next/link";
import React from "react";
import ButtonOne from "../../shared/ButtonOne";
import Image from "next/image";
const HomeAbout = () => {
  return (
    <div className="2xl:bg-[url('/assests/images/home/A.png')] 2xl:bg-cover 2xl:bg-no-repeat 2xl:bg-center px-5 lg:px-24 py-8 lg:py-40">
      <div className="grid grid-cols-1 2xl:grid-cols-2 place-items-center ">
        <div></div>
        <div className="w-full 2xl:w-[702px] grid justify-items-center lg:justify-items-start">
          <span className="display mb-2">About Us</span>
          <h2 className="text-primary mb-6 text-center lg:text-left">
            We Believe in Working Accredited Farmers
          </h2>
          <p className="mb-12 text-center">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="grid gap-7 mb-10">
            <div className="flex gap-4 items-center ">
              <div className="w-20 h-12 md:w-[101px] md:h-[101px]  bg-white flex justify-center items-center rounded-[8px]">
                <div className="w-6 h-6 md:w-[52px] md:h-[52px] relative">
                  <Image
                    src="/assests/images/home/about1.png"
                    fill
                    className="object-cover"
                    alt="Images"
                  />
                </div>
              </div>

              <div>
                <h6>Organic Foods Only</h6>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
            <div className="w-20 h-12 md:w-[101px] md:h-[101px]  bg-white flex justify-center items-center rounded-[8px]">
                <div className="w-6 h-6 md:w-[52px] md:h-[52px] relative">
                  <Image
                    src="/assests/images/home/about2.png"
                    fill
                    className="object-cover"
                    alt="Images"
                  />
                </div>
              </div>
              <div>
                <h6>Quality Standards</h6>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <ButtonOne href="/about" title="Learn More" className="bg-primary text-white" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
