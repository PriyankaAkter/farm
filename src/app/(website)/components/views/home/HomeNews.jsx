import React from "react";

import News from "../../shared/News";
import { news1 } from "./data";

import ButtonOne from "../../shared/ButtonOne";
const HomeNews = () => {
  const sliceNews = news1.slice(0,2)
  
  return (
    <div className="container py-16 lg:py-32">
      <div>
        <div className="mb-8 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
          <div className="mb-10">
            <span className="display mb-2">News</span>
            <h2 className="text-primary">
              Discover weekly content about <br />
              organic food, & more
            </h2>
          </div>
          <ButtonOne href="/blog" title="More News" className="border-2 border-primary bg-none" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-28">
          {sliceNews.map((item, index) => (
            <News item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNews;

// className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 place-items-center"