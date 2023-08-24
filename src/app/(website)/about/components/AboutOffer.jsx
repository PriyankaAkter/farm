import React from "react";
import Image from "next/image";
const AboutOffer = () => {
  return (
    <div className="bg-primary py-20 lg:py-[188px]">
      <div className="container">
        <div className="text-center mb-10 w-full lg:w-[852px] mx-auto">
          <span className="display">About Us</span>
          <h2 className="text-white">What we offer for you</h2>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          <div className="grid justify-items-center gap-6">
            <div className="w-full sm:w-[334px] h-[314px] relative">
              <Image
                src="/assests/images/about/spicy.jpg"
                fill
                className="object-cover rounded-2xl"
                alt="Images"
              />
            </div>
            <h6 className="text-white">Spicy</h6>
          </div>
          <div className="grid justify-items-center gap-6">
            <div className="w-full sm:w-[334px] h-[314px] relative">
              <Image
                src="/assests/images/about/nuts.jpg"
                fill
                className="object-cover rounded-2xl"
                alt="Images"
              />
            </div>
            <h6 className="text-white">Nuts & Feesd</h6>
          </div>
          <div className="grid justify-items-center gap-6">
            <div className="w-full sm:w-[334px] h-[314px] relative">
              <Image
                src="/assests/images/about/fruit.jpg"
                fill
                className="object-cover rounded-2xl"
                alt="Images"
              />
            </div>
            <h6 className="text-white">Fruits</h6>
          </div>
          <div className="grid justify-items-center gap-6">
            <div className="w-full sm:w-[334px] h-[314px] relative">
              <Image
                src="/assests/images/about/vegetable.jpg"
                fill
                className="object-cover rounded-2xl"
                alt="Images"
              />
            </div>
            <h6 className="text-white">Vegetables</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOffer;
