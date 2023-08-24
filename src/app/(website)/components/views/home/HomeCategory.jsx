import Image from "next/image";
import Link from "next/link";
const HomeCategory = () => {
  return (
    <div className="w-screen px-5 2xl:px-0 bg-[#F1F8F4] py-10 2xl:py-[187px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-10 justify-items-center">
        <div className="w-full h-[310px]  2xl:h-[583px] bg-[url('/assests/images/home/juice.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
          <div className="">
            <div
              className="py-4 sm:py-8 px-10 sm:px-20 text-base 2xl:text-[25px] text-primary font-bold bg-white rounded-2xl font-roboto inline-block"
            >
              Organic Juice
            </div>
          </div>
        </div>
        <div className="w-full h-[310px] 2xl:h-[583px] bg-[url('/assests/images/home/food.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
        <div >
            <div
              href="/"
              className="py-4 sm:py-8 px-10 sm:px-20 text-base 2xl:text-[25px] text-primary font-bold bg-white rounded-2xl font-roboto "
            >
              Organic Food
            </div>
          </div>
        </div>
        <div className="w-full h-[310px] 2xl:h-[583px] bg-[url('/assests/images/home/cookies.jpg')] bg-cover bg-no-repeat flex justify-center items-center">
        <div>
            <div
              className="py-4 sm:py-8 px-10 sm:px-20 text-base 2xl:text-[25px] text-primary font-bold bg-white rounded-2xl font-roboto "
            >
              Organic Cookies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
