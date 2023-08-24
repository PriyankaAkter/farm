import Image from "next/image";

const ServicesDetails = () => {
  return (
    <div className="py-12 2xl:py-44 container">
      <div className=" w-full 2xl:w-[1400px] h-[300px] 2xl:h-[746px] relative">
        <Image
          src="/assests/images/service/image1.jpg"
          fill
          alt="images"
          objectFit="cover"
        />
      </div>
      <div className="w-full 2xl:w-[936px] mx-auto mt-10 2xl:mt-20"> 
        <h2 className="mb-7">Organic Store Services</h2>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
          <br />
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncover many web sites still
          in their infancy. Various versions have evolved over the years
        </p>
        <div className="flex flex-col lg:flex-row gap-5 mb-7 mt-16">
          <div className="w-full md:w-[379px] h-[252px] relative">
            <Image
              src="/assests/images/service/image2.jpg"
              fill
              alt="images"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
          <div className="py-16 px-11 bg-theme-white rounded-3xl w-full md:w-[537px]">
            <h6>Why Organic</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
              editors now use Lorem Ipsum as their default model text, and
              auncover.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
        <div className="py-16 px-11 bg-theme-white rounded-3xl w-full md:w-[537px]">
            <h6>Speciality Produce</h6>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
              editors now use Lorem Ipsum as their default model text, and
              auncover.
            </p>
          </div>
          <div className="w-full md:w-[379px] h-[252px] relative">
            <Image
              src="/assests/images/service/image3.jpg"
              fill
              alt="images"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="mt-14">
            <h4>We farm your land</h4>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-7 mt-14">
            <div className="flex items-center gap-4 sm:gap-6 bg-theme-white py-2 sm:py-4 pl-2 sm:pl-4 pr-[53px] rounded-full">
                <div className="bg-secondary flex items-center justify-center w-16 sm:w-20 h-14 sm:h-20 rounded-full text-white ">
                    <h6 className="text-base sm:text-xl">01</h6>
                </div>
                <h6 className="text-base">Best quality support</h6>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 bg-theme-white py-2 sm:py-4 pl-2 sm:pl-4 pr-[53px] rounded-full">
                <div className="bg-secondary flex items-center justify-center w-16 sm:w-20 h-14 sm:h-20 rounded-full text-white ">
                    <h6 className="text-base sm:text-xl">02</h6>
                </div>
                <h6 className="text-base">Money back guarantee</h6>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
