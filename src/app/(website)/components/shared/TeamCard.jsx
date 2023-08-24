import { BsFacebook,BsTwitter } from "react-icons/bs"
import Link from "next/link";
import Image from "next/image";
const TeamCard = ({ item }) => {
  return (
    <Link href="/" className="rounded-2xl bg-theme-white  hover:drop-shadow hover:bg-white" >
      <div className="w-full h-[350px]  relative">
        <Image src={item.image} fill className="rounded-t-2xl" alt="Images" objectFit="cover" />
      </div>
      <div className="py-7 px-8 flex justify-between items-end ">
        <div>
          <h6>{item.name}</h6>
          <span className="display text-6">{item.profession}</span>
        </div>
        <div className="flex gap-4">
            <BsFacebook className="w-[22px] h-[22px] text-primary" />
            <BsTwitter className="w-[22px] h-[22px] text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
