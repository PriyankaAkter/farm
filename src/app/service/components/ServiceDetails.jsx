import React from "react";
import Image from "next/image";
import { service } from "@/app/components/views/home/data";
import ButtonOne from "@/app/components/shared/ButtonOne";
const ServiceDetails = () => {
  const sliceLeft = service.slice(0, 3);
  const sliceRight = service.slice(3);
  return (
    <div className="container py-10 xl:py-48 grid place-items-center gap-20">
      <div className="text-center w-full md:w-[482px]">
        <span className="display">What we Grow</span>
        <h2 className="text-primary">Better Agriculture for Better Future</h2>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-8">
        <div className="text-left 2xl:text-right grid gap-10">
          {sliceLeft.map((item) => (
            <div key={item.id} className="grid 2xl:place-items-end">
              <div className="w-[46px] h-[46px] relative">
                <Image
                  src={item.image}
                  fill
                  className="object-cover"
                  alt="Images"
                />
              </div>
              <h6 className="text-primary text-xl font-roboto font-semibold mb-3 ">
                {item.title}
              </h6>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[460px] h-[600px] relative">
          <Image
            src="/assests/images/service/nuts.png"
            fill
            className="object-cover rounded-t-2xl"
            alt="Images"
          />
        </div>

        <div className="grid gap-10">
          {sliceRight.map((item) => (
            <div key={item.id} className="">
              <div className="w-[46px] h-[46px] relative">
                <Image
                  src={item.image}
                  fill
                  className="object-cover"
                  alt="Images"
                />
              </div>
              <h6 className="text-primary text-xl font-roboto font-semibold mb-3 ">
                {item.title}
              </h6>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonOne href="/services" title="Explore More" className="border-2 border-primary" />
    </div>
  );
};

export default ServiceDetails;
