import Image from "next/image";

const ContactLocation = () => {
  return (
    <div className="py-28">
      <div
        className={`bg-[url('/assests/images/contact/banner2.jpg')] bg-cover bg-no-repeat bg-center container lg:rounded-3xl lg:py-28 grid justify-items-end lg:pr-[108px] h-[505px] lg:h-[758px]`}
      >
        <div className="flex items-center">
          <div className="bg-white lg:w-[514px] w-11/12 mx-auto lg:py-12 px-5 lg:px-14">
            <span className="display">Location</span>
            <h2>Our Farms</h2>
            <p className="mb-5">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using.
            </p>
            <div className="grid gap-4 mb-9 ">
              <div className="flex gap-2 sm:gap-5 items-start  lg:w-[352px]">
                <div className="w-7 sm:w-[50px] h-7 sm:h-[50px] relative">
                  <Image
                    alt="Images"
                    src="/assests/images/contact/icon3.png"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="font-bold">New York, USA:</p>
                  <p>299 Park Avenue New York, New York 10171</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-5 lg:w-[352px]">
                <div className="w-7 sm:w-[50px] h-7 sm:h-[50px] relative">
                  <Image
                    alt="Images"
                    src="/assests/images/contact/icon3.png"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div>
                  <p className="font-bold">London, UK:</p>
                  <p>30 Stamford Street, London SE1 9LQ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
