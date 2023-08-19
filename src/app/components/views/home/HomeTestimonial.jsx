"use client";
import { testimonial } from "./data";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const HomeTestimonial = () => {
  return (
    <div className="py-40 bg-[url('/assests/images/home/testiBack.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="w-full xl:w-[780px] mx-auto ">
        <div className="text-center mb-10">
          <span className="display">Testimonial</span>
          <h2 className="text-primary">What Our Customer Saying?</h2>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className=""
        >
          {testimonial.map((item, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center p-8">
              <div className="w-[115px] h-[115px] relative mx-auto mb-4">
                <Image
                  src={item.image}
                  fill
                  className="object-cover"
                  alt="Images"
                />
              </div>
              <div className="flex justify-center items-center mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <AiFillStar key={i} className="text-[#FFA858]" />
                ))}
              </div>
              <p className="text-center mb-4">{item.description}</p>
              <h6 className="text-center">{item.name}</h6>
              <p className="text-center">{item.designation}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full lg:w-[1108px] mx-auto my-24 h-[1px] bg-primary bg-opacity-30"></div>
      <div className="w-full 2xl:w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-16 text-primary justify-items-center">
        <div className="border-2 border-secondary w-[221px] h-[221px] p-2 rounded-full bg-white ">
          <div className="bg-[#F1F1F1] w-full h-full rounded-full text-center flex flex-col justify-center items-center">
            <h2>100%</h2>
            <p>Organic</p>
          </div>
        </div>
        <div className="border-2 border-secondary w-[221px] h-[221px] p-2 rounded-full bg-white ">
          <div className="bg-[#F1F1F1] w-full h-full rounded-full text-center flex flex-col justify-center items-center">
            <h2>285</h2>
            <p>Active Product</p>
          </div>
        </div>
        <div className="border-2 border-secondary w-[221px] h-[221px] p-2 rounded-full bg-white ">
          <div className="bg-[#F1F1F1] w-full h-full rounded-full text-center flex flex-col justify-center items-center">
            <h2>350+</h2>
            <p>Organic Orchads</p>
          </div>
        </div>
        <div className="border-2 border-secondary w-[221px] h-[221px] p-2 rounded-full bg-white ">
          <div className="bg-[#F1F1F1] w-full h-full rounded-full text-center flex flex-col justify-center items-center">
            <h2>25+</h2>
            <p>Years of Farming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
