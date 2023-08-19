"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addCartMultiple } from "@/app/reduxt_store/cartAddSlice";



const DesktopNavbar = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart.products)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const products = JSON.parse(localStorage.getItem("cart"));
     
      if(products){
        products.forEach(element => {
          dispatch(addCart(element))
        });
      }
      
    }
  }, []);


  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };


  

  return (
    <div className="hidden 2xl:block">
      <nav className="flex justify-between items-center container py-5">
        <Link href="/" className="flex justify-center items-center gap-2">
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
        <div className="flex justify-between items-center gap-10 text-xl font-bold text-primary">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/">Pages</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/portfolio">Projects</Link>
          <Link href="/blog">News</Link>
        </div>

        <div className="flex gap-4 relative">
          <div className="flex flex-col gap-2">
            <div className="w-[376px] p-1 overflow-hidden h-[60px] bg-theme-white rounded-full flex items-center gap-2">
              <input
                type="text"
                className="flex-1 bg-transparent h-full outline-none px-3"
                placeholder="Enter Search"
                value={inputValue}
                onChange={handleInputChange}
              />
              <div className="w-[56px] h-[56px] relative rounded-2xl">
                <Image
                  alt="Images"
                  src="/assests/images/home/search.svg"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* <div className="absolute translate-y-1/2 w-[376px] p-1 overflow-hidden h-[60px] bg-theme-white flex items-center px-2">
              {inputValue}
            </div> */}
          </div>

          <Link
            href="/checkout"
            className="w-[159px] p-1  overflow-hidden h-[60px] rounded-full flex items-center gap-2 border"
          >
            <div className="w-[56px] h-[56px] relative rounded-full p-2 bg-primary flex justify-center items-center">
              <AiOutlineShoppingCart className="text-white w-7 h-7" />
            </div>
            <div className="bg-transparent h-full pt-3 font-medium font-base">
              Cart {cart?.length}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
