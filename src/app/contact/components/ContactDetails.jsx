import {
  BiLogoPinterest,
  BiLogoInstagram,
  BiLogoFacebookCircle,
  BiLogoTwitter,
} from "react-icons/bi";
import Image from "next/image";
const ContactDetails = () => {
  return (
    <div className="container grid grid-cols-1 2xl:grid-cols-2 pt-10 lg:pt-[210px]">
      {/* <div className="sb rounded-2xl"> */}
        <div className="w-full md:w-[623px] h-[350px] md:h-[640px] relative ">
          <Image
            alt="Images"
            src="/assests/images/contact/i1.jpg"
            fill
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      {/* </div> */}
      <div className="pt-6">
        <h2 className="mb-4">We'd love to talk about how we can work together.</h2>
        <p className="mb-9">
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>

        <div className="grid gap-4 mb-9">
          <div className="flex gap-5 items-center bg-white shadow p-3 rounded-2xl w-full sm:w-[352px]">
            <div className="w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] relative rounded-2xl">
              <Image
                alt="Images"
                src="/assests/images/contact/icon1.png"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <h6>Massege</h6>
              <p>support@organic.com</p>
            </div>
          </div>

          <div className="flex gap-5 items-center bg-white shadow p-3 rounded-2xl w-full sm:w-[352px]">
            <div className="w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] relative rounded-2xl">
              <Image
                alt="Images"
                src="/assests/images/contact/icon2.png"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <h6>Massege</h6>
              <p>support@organic.com</p>
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default ContactDetails;
