"use client";
import { products } from "@/app/components/views/home/data";
import { addQuantity, decrementQuantity, removeCart } from "@/app/reduxt_store/cartAddSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";






const CheckOutDetails = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart.products)
  console.log(cart);
  const totalPrice=cart.reduce((sum,item)=>(sum+(item.discount*item.quantity)),0)
  // const dispatch = useDispatch();
  // const [cart, setcart] = useState([]);
  // console.log({cart});

  // useEffect(() => {
  //   setcart(JSON.parse(localStorage.getItem("cart")));
  // }, []);

  // console.log(cart);
  // const dispatch = useDispatch()
  // const cart = useSelector(state=>state.cart.products)
  // const totalPrice = cart?.reduce((sum,item)=>(sum+(item.discount*item.quantity)),0)
//   const dispatch = useDispatch()
// const cart = useSelector(state=>state.cart.products)
// const totalPrice = cart?.reduce((sum,item)=>(
//   sum + (item.discount*item.quantity)
// ),0)

  return (
    <div className="my-[134px] container">
      <div className="container py-28">
        <div className="overflow-x-auto">
          <table className="border w-full ">
            <thead className="rounded-2xl ">
              <tr className="py-4">
                <th className="text-base font-normal text-primary py-4">
                  Products
                </th>
                <th className="text-base font-normal text-primary">Price</th>
                <th className="text-base font-normal text-primary">Quantity</th>
                <th className="text-base font-normal text-primary">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="border">
              {cart.length> 0 && cart?.map((e,index) => {
                console.log(e)
                return  <tr key={index} className="text-center  border">
                <td className="flex items-center gap-2 sm:gap-6 py-4 pl-2 ">
                  <div className="w-20 h-16 sm:h-[80px] relative bg-[#F0E4E6]">
                    <Image src={e?.images[0]} alt="Images" fill />
                  </div>

                  <span className="text-base sm:text-[22px] font-normal text-primary">
                    {e.name}
                  </span>
                </td>
                <td className="text-base sm:text-[22px] font-normal text-primary px-8">
                  {e.discount}
                </td>
                <td className="px-8">
                  <div className="text-base sm:text-[22px] font-normal text-primary w-28 sm:w-[171px] mx-auto p-1 bg-[#EFF6F1] rounded-full flex justify-between items-center">
                    <button
                    disabled={e.quantity===1}
                      onClick={()=>dispatch(decrementQuantity(e.id))}
                      className="bg-white p-2 rounded-full text-base sm:text-2xl"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span>{e.quantity}</span>
                    <button
                    onClick={()=>dispatch(addQuantity(e.id))}
                      
                      className="bg-white p-2 rounded-full text-base sm:text-2xl"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td className="text-base sm:text-[22px] font-medium text-primary px-8">
                  {e.discount * e.quantity}
                </td>
                <td className="px-8">
                  <button
                  onClick={()=>{
                    dispatch(removeCart(e.id))
                    // const isExist = oldItems.find((item)=>item.id==product.id)
                    // if(!isExist){
                    //   const oldItems = JSON.parse(localStorage.getItem("cart"))
                    //   oldItems.push(product)
                    //   console.log({oldItems});
                    //   localStorage.setItem("cart",JSON.stringify(oldItems))
                    // }
             
                   }}

                    className="text-base sm:text-2xl"
                  >
                    <RxCross2 className="w-4 h-4 text-primary inline-block" />
                  </button>
                </td>
              </tr>
              })}
            </tbody>
          </table>
          <div className="w-full flex justify-end">
            <div className="flex justify-evenly items-center gap-32 py-5 w-[620px] border">
              <h6>Total Price</h6>
              <h6>{totalPrice}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;
