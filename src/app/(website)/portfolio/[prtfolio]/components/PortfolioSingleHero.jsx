import NewsLetter from "@/website/components/layout/newsletter/NewsLetter";
import Image from "next/image";

const PortfolioSingleHero = ({ portfolios }) => {
  const containerStyle = {
    backgroundImage: `url(${portfolios.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <div
        style={containerStyle}
        className={`bg-[url('/assests/images/portfolio/img5.png')] bg-cover bg-center bg-no-repeat relative h-[400px] 2xl:h-[700px]`}
      >
        <div className="2xl:w-[1400px] w-11/12 left-1/2 -translate-x-1/2 translate-y-3/4 lg:translate-y-1/2 absolute bottom-10">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
            {/* ------ */}
            <div className="py-12 lg:py-24 px-5 sm:px-10 lg:px-20 bg-white w-full xl:w-[891px] rounded-tl-3xl rounded-bl-3xl shadow">
              <h1 className="mb-5">{portfolios.title}</h1>
              <p>{portfolios.description}</p>
            </div>
            {/* ------------ */}
            <div className="bg-[#FAFAFA] py-12 lg:py-24 px-5 sm:px-10 lg:px-20 rounded-tr-3xl rounded-br-3xl shadow">
              <div className="w-full md:w-[287px]">
                <div className="flex gap-x-1 sm:gap-x-4 items-center">
                  <h6 className="w-[100px] flex justify-between items-end text-base sm:text-xl">
                    <span>Date</span> <span>:</span>
                  </h6>
                  <p>{portfolios.date}</p>
                </div>

                <div className="flex gap-x-1 sm:gap-x-4 items-center">
                  <h6 className="w-[100px] flex justify-between items-end text-base sm:text-xl">
                    <span>Client</span> <span>:</span>
                  </h6>

                  <p>{portfolios.client}</p>
                </div>

                <div className="flex gap-x-1 sm:gap-x-4 items-center">
                  <h6 className="w-[100px] flex justify-between items-end text-base sm:text-xl">
                    <span>Category</span> <span>:</span>
                  </h6>

                  <p>{portfolios.category}</p>
                </div>

                <div className="flex gap-x-1 sm:gap-x-4 items-center">
                  <h6 className="w-[100px] flex justify-between items-end text-base sm:text-xl">
                    <span>Service</span> <span>:</span>
                  </h6>
                  <p>{portfolios.category}</p>
                </div>
              </div>
            </div>
            {/* ------- */}
          </div>
          {/* ----------- */}
        </div>
      </div>

      <div
        className="w-full px-5 lg:px-10 2xl:w-[936px] pt-60 lg:pt
      -28 mx-auto mt-60 lg:mt-2"
      >
        <div>
          <h4 className="sm:mt-10 mb-6">About The Farm:</h4>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English.
            <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>

        <div className="flex gap-5 mb-7 mt-16">
          <div className="w-full h-[426px] relative">
            <Image
              src="/assests/images/portfolio/p1.png"
              fill
              alt="images"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
        <p className="text-center">The Organic Products</p>
        <div>
          <h4 className="mt-7 mb-6">How To Farm:</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
            <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>
        <div>
          <h4 className="mt-7 mb-6">Conclusion:</h4>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
            <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default PortfolioSingleHero;
