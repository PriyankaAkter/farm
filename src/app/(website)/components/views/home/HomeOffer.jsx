import React from "react";

const HomeOffer = () => {
  return (
    <div className="container py-10 2xl:py-32">
      <div className="  grid grid-cols-1 2xl:grid-cols-2 gap-8 ">
        <div
          className={`h-[350px] sm:h-[376px] bg-[url('/assests/images/home/natural.jpg')] bg-cover bg-no-repeat rounded-2xl pl-6 sm:pl-14 py-[110px]`}
        >
          <span className="display text-white">Natural!!</span>
          <h3 className="text-white">
            Get Garden <br />
            Fresh Fruits
          </h3>
        </div>
        <div
          className={`h-[350px] sm:h-[376px] bg-[url('/assests/images/home/offer.png')] bg-cover bg-no-repeat rounded-2xl pl-6 sm:pl-14 py-[110px]`}
        >
          <span className="display">Offer!!</span>
          <h3>
            Get 10% off <br />
            on Vegetables
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
