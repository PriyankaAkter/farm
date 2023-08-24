"use client";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu, BiX } from "react-icons/bi";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const NavList = [
    {
      id: 1,
      title: "Home",
      ref: "/",
    },
    {
      id: 2,
      title: "About",
      ref: "/about",
    },
    {
      id: 3,
      title: "Pages",
      ref: "/",
    },
    {
      id: 4,
      title: "Shop",
      ref: "/shop",
    },
    {
      id: 5,
      title: "Projects",
      ref: "/portfolio",
    },
    {
      id: 6,
      title: "News",
      ref: "/blog",
    },
  ];
  return (
    <div className="bg-white 2xl:hidden py-5 w-screen">
      <nav className="grid grid-cols-1 container gap-4 ">
        <div className="flex justify-between items-center">
          <div
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <BiX className="w-6 2xl:w-8 h-6 2xl:h-8 text-primary" />
            ) : (
              <BiMenu className="w-6 md:w-8 h-6 md:h-8 text-primary" />
            )}
          </div>
          <Link href='/' className="flex justify-center items-center gap-2">
            <div className="w-[22px] md:w-[36px] h-8 md:h-[53px] relative rounded-2xl">
              <Image
                alt="Logo"
                src="/assests/images/home/Logo.svg"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-2xl md:text-lg text-primary">Organick</h4>
          </Link>

          <div className="w-8 md:w-[56px] h-8 md:h-[56px] relative rounded-full p-2 bg-primary flex justify-center items-center">
            <AiOutlineShoppingCart className="text-white w-7 h-7" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[376px] p-1 overflow-hidden h-12 md:h-[60px] bg-theme-white rounded-full flex items-center gap-2">
            <input
              type="text"
              className="flex-1 bg-transparent h-full outline-none md:px-3"
              
            />
            <div className="w-10 h-10 md:w-[56px] md:h-[56px] relative rounded-2xl">
              <Image
                alt="Seach"
                src="/assests/images/home/search.svg"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className={clsx("py-32 h-screen", open ? "block" : "hidden")}>
          <ul className="flex flex-col items-center gap-10">
            {NavList.map((item) => (
              <li
                onClick={() => {
                  setOpen(false);
                }}
                key={item.id}
                className={`text-primary font-bold text-xl`}
              >
                <Link href={item.ref}>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
