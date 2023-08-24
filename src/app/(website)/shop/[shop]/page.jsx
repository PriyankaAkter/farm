'use client'
import ShopSingle from './components/ShopSingle'
import { products } from '@/website/components/views/home/data'
import {useParams} from 'next/navigation'

const page = () => {
  const param = useParams()
  const product = products.find(e=>e.slug==param.shop)
  console.log(param,product);
  const relatedProducts = products.filter(e=>e.category.slug==product.category.slug)
  console.log({product, relatedProducts});
  return (
    <ShopSingle shop={product} service={relatedProducts} />
  )
}

export default page