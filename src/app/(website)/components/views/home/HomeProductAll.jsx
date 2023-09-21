'use client'
import React from "react";
import { products } from "./data";
import ButtonOne from "../../shared/ButtonOne";
import Card from "../../layout/card/Card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchCategory = () => {
  return axios.get(`/api/product`);
};
const HomeProductAll = () => {

  const { isLoading, data, isError, error, refetch } = useQuery({
    queryKey: ["product-data"],
    queryFn: fetchCategory,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
    const sliceProducts = data.data?.filter(item=>item.slug=="Vegetable");
    console.log({sliceProducts});
  return (
    <div className="bg-primary w-screen py-20 lg:py-40">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center">
          <div className="mb-5 lg:mb-10">
            <span className="display inline-block">Offer</span>
            <h2 className="text-white">We Offer Organic For You</h2>
          </div>
          <ButtonOne href='/shop' title="View All Products" className="bg-theme-yellow text-primary mb-5" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          {sliceProducts.map((item, index) => (
   
          <Card item={item} key={index} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HomeProductAll;
