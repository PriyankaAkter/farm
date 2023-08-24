import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import NewsLetter from "@/website/components/layout/newsletter/NewsLetter";
const BlogSingleHero = ({ blogs }) => {
  const containerStyle = {
    backgroundImage: `url(${blogs.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <div
        style={containerStyle}
        className={` bg-cover bg-center bg-no-repeat h-[500px] lg:h-[700px] relative`}
      >
        <div className="2xl:w-[1400px] w-11/12 left-1/2 -translate-x-1/2 translate-y-1/2 absolute bottom-10">
          {/* ------ */}
          <div
            className="py-7 lg:py-24 px-5 lg:px-20 bg-white rounded-3xl 
          shadow"
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-5">
              <div className="flex items-center gap-2">
                <p className="font-bold">Posted on:</p>
                <span className=" block">Januaray 6, 2022</span>
              </div>

              <div className="flex gap-2 items-center ">
                <BsFillPersonFill className={`w-5 h-5 text-secondary`} />
                <p>{blogs.name}</p>
              </div>
            </div>
            <h1 className="mb-5">{blogs.title}</h1>
            <p>{blogs.summary}</p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 sm:px-10 xl:w-[936px] mx-auto mt-52 sm:mt-48">
        <p>
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <div>
          <h2 className="mt-7 mb-6">Preferred Form of Vitamin D?</h2>
          <p className="mb-8">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
          </p>
          <ul className="blog-li flex flex-col gap-5 ml-5">
            <li>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li> Content here, content here', making it look like readable</li>
            <li> Packages and web pageLorem Ipsum as their default</li>
          </ul>
        </div>

        <div className="bg-[#F1EDEA] px-5 lg:px-14 py-5 lg:py-[70px] rounded-3xl my-12">
          <span className="text-[20px]">
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </span>
        </div>

        <div>
          <h2 className="mt-7 mb-6">Make perfect organic product with us</h2>
          <p className="mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <div className="flex flex-col gap-5">
            <p>
              1.Publishing packages and web pageLorem Ipsum as their default
            </p>
            <p>
              2.Publishing packages and web pageLorem Ipsum as their default
            </p>
            <p>
              3.Publishing packages and web pageLorem Ipsum as their default
            </p>
            <p> 4. more-or-less normal distribution of letters</p>
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default BlogSingleHero;
