import React from "react";
import ButtonOne from "../../shared/ButtonOne";
import Link from "next/link";
const HomeHero = () => {
  return (

      <div className={`bg-multiple-images w-screen h-[calc(70vh-221px)] xl:h-[calc(100vh-221px)] top-0 left-0 `}>
          <div className="container  text-white flex items-center w-full h-full">
            <div className="sm:w-[530px] w-full">
              <span className="display">100% Natural Food</span>
              <h1 className="text-primary mb-6">
                Choose the best healthier way of life
              </h1>
              <ButtonOne
                href="/blog"
                title="Explore Now"
                className="bg-theme-yellow text-primary"
              />
            </div>
          </div>
      </div>

  );
};

export default HomeHero;
// style={{background: "radial-gradient(80.99% 71.93% at 74.58% 0.00%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%)"}}
