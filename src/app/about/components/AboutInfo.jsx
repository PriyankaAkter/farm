import React from "react";
import Image from "next/image";
import ButtonOne from "@/app/components/shared/ButtonOne";
const AboutInfo = () => {
  return (
    <div className="px-5 lg:px-24 lg:py-24 ">
      <div className="">
        <div className="grid grid-cols-1 gap-8 2xl:gap-16 2xl:grid-cols-2 justify-items-center ">
          <div className="">
            <div className="w-screen h-[400px] lg:w-[821px] lg:h-[864px] relative ">
              <Image
                src="/assests/images/about/about.png"
                fill
                objectFit="contain"
                className="rounded-t-2xl"
                alt="Images"
              />
            </div>
          </div>
          <div className="w-full 2xl:w-[702px] lg:pt-16 grid place-items-center md:place-items-start pb-10">
            <div className="text-center md:text-left">
              <span className="text-3xl font-normal font-yellowTail md:text-4xl text-secondary mb-2 block ">
                About Us
              </span>
              <h2 className="text-primary mb-6 ">
                We do Creative <br />
                Things for Success
              </h2>
              <p className="mb-12 ">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
                <br />
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>

            <div className="flex flex-col justify-start items-center md:flex-row gap-10 mb-10">
              <div className="w-[236px] flex gap-4 
               ">
                <div className="w-[34px] h-[34px] md:w-[46px] md:h-[46px] relative">
                  <Image
                    src="/assests/images/about/about1.png"
                    fill
                    className="object-contain"
                    alt="Images"
                  />
                </div>

                <h6>Modern Agriculture Equipment</h6>
              </div>
              <div className="w-[236px] flex gap-4 items-center">
                <div className="w-[34px] h-[34px] md:w-[46px] md:h-[46px] relative">
                  <Image
                    src="/assests/images/about/about2.png"
                    fill
                    className="object-contain"
                    alt="Images"
                  />
                </div>

                <h6>No growth hormones are used</h6>
              </div>
            </div>
            <ButtonOne
              href="/about"
              title="Explore More"
              className="bg-primary text-white"
            />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutInfo;
