import { RiFolderSharedLine } from "react-icons/ri";
import Image from "next/image";
// import data from '@admin/dashboard/data'
import { AiOutlineHome } from "react-icons/ai";
import { BsHandbag, BsFillPersonFill, BsDatabase } from "react-icons/bs";
import { RiCoupon5Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import Link from "next/link";
import { navbarData } from "./data";
export const SideBar = () => {
  // console.log(navbar);
  return (
    <div className="w-[450px] bg-[#f1f2f6] py-14 px-14 h-auto">
      <div className="flex justify-between items-center mb-24">
        <div className="flex gap-4">
          <div className="w-16 h-16 relative ">
            <Image
              fill
              src="/assests/images/home/team1.jpg"
              alt="profile"
              className="rounded-full"
            />
          </div>
          <div>
            <p>Hello,</p>
            <h6>Soho Store</h6>
          </div>
        </div>

        <div className="">
          <RiFolderSharedLine className="text-primary w-5 h-5" />
        </div>
      </div>
      <div className="mb-16">
        <p className="font-bold text-primary opacity-80">Earning</p>
        <h4>$12,560.55</h4>
      </div>
      <hr />
      <div className="grid gap-5 mt-24">
        {navbarData.map((item, index) => (
          <div className="flex gap-8 items-center">
            <div>
              {/* <AiOutlineHome className="text-primary w-5 h-5" /> */}
              {item.icon}
            </div>
            <Link
              href={item.href}
              className="text-xl font-medium hover:text-secondary"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-24">
        <Link href="/" className="flex items-center gap-2 mb-2">
          <div className="w-[36px] h-[53px] relative rounded-2xl">
            <Image
              alt="Images"
              src="/assests/images/home/Logo.svg"
              fill
              className="object-contain"
            />
          </div>
          <h4 className="text-[38px] text-primary">Organick</h4>
        </Link>
        <p className="font-medium opacity-60">©2021 Farmart marketplace.<br/>All rights reversed.</p>
        
      </div>
    </div>
  );
};
