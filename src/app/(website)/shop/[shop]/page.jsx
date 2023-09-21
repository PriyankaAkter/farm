'use client'
import ShopSingle from './components/ShopSingle'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {useParams} from 'next/navigation'



const fetchCategory = () => {
  return axios.get(`/api/product`);
};

const page = () => {
  const param = useParams()
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
  const product = data.data?.find(e=>e.slug==param.shop)
  console.log({param,product});
  console.log({data});
  // console.log(param,product);
  const relatedProducts = data.data?.filter(e=>e.slug==product?.slug)
  console.log({product, relatedProducts});


  // const product = products.find(e=>e.slug==param.shop)
  // console.log(param,product);
  // const relatedProducts = products.filter(e=>e.category.slug==product.category.slug)
  // console.log({product, relatedProducts});
  return (
    // <ShopSingle shop={product}  />
    <ShopSingle shop={product} service={relatedProducts} />
  )
}

export default page