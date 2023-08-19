import {
  BiLogoPinterest,
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container  pt-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 pb-28">
      <div className="lg:text-right order-1 lg:order-0 lg:pr-12 lg:border-r border-r-primary border-opacity-25">
        <h5 className="mb-8">Contact Us</h5>
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-bold">Email</p>
            <p>needhelp@Organia.com</p>
          </div>
          <div>
            <p className="font-bold">Phone</p>
            <p>666 888 888</p>
          </div>
          <div>
            <p className="font-bold">Address</p>
            <p>88 road, borklyn street, USA</p>
          </div>
        </div>
      </div>
      <div  className="flex flex-col items-center lg:px-10 lg:order-1">
      <Link href='/' className="flex justify-center items-center gap-2 mb-6">
          <div className="w-[36px] h-[53px] relative rounded-2xl">
            <Image
              alt="Images"
              src="/assests/images/home/Logo.svg"
              fill
              objectFit="contain"
            />
          </div>
          <h4 className="text-[38px] text-primary">Organick</h4>
        </Link>
        <p className="mb-12 text-center">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing{" "}
        </p>
        <div className="flex gap-2 sm:gap-4">
          <div className="w-[60px] h-[60px] p-5 bg-[#EFF6F1] rounded-full">
            <BiLogoInstagram className="w-5 h-5" />
          </div>
          <div className="w-[60px] h-[60px] p-5 bg-[#EFF6F1] rounded-full">
            <BiLogoFacebookCircle className="w-5 h-5" />
          </div>
          <div className="w-[60px] h-[60px] p-5 bg-[#EFF6F1] rounded-full">
            <BiLogoTwitter className="w-5 h-5" />
          </div>
          <div className="w-[60px] h-[60px] p-5 bg-[#EFF6F1] rounded-full">
            <BiLogoPinterest className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="order-2 lg:order-2 text-left lg:pl-12 lg:pr-12 border-none lg:border-l border-l-primary border-opacity-25">
        <h5 className="mb-6">Utility Pages</h5>
        <div className="flex flex-col gap-6">
          <p>StyleS Guide</p>
          <p>404 Not Found</p>
          <p>Password Protected</p>
          <p>Licences</p>
          <p>Changelog</p>
        </div>
      </div>
      </div>
      <hr />
      <p className="text-center">Copyright © <span className="font-bold">Organick</span > | Designed by <span className="font-bold">VictorFlow</span> Templates - Powered by <span className="font-bold">Webflow</span></p>
    </div>
  );
};

export default Footer;
