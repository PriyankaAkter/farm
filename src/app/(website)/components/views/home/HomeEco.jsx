import React from "react";
import Image from "next/image";
const HomeEco = () => {
  return (
    <div className="w-screen">
      <div className="grid grid-cols-1 2xl:grid-cols-2 relative">
        <div className="w-full 2xl:w-[952px] h-[500px] 2xl:h-[931px] relative">
          <Image
            src="/assests/images/home/eco.png"
            alt="Images"
            fill
            className="object-cover"
          />
        </div>
        {/* <div className="lg:mx-auto sb"> */}
          <div className="relative py-8 lg:py-20 lg:pl-[90px] bg-white rounded-2xl w-11/12 inset-x-4 md:inset-x-8 lg:w-[789px] h-[723px] -mt-24 lg:mt-24 lg:-ml-24">
            <div className="absolute px-4">
              <span className="display mb-2">Eco Friendly</span>
              <h2 className="text-primary mb-9">
                Econis is a Friendly Organic Store
              </h2>
              <div className="flex flex-col gap-9">
                <div>
                  <h6>Start with Our Company First</h6>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h6>Learn How to Grow Yourself</h6>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h6>Farming Strategies of Today</h6>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default HomeEco;
