import React from 'react'
import Link from "next/link";
import Image from 'next/image';
const PortfolioCard = ({item}) => {
  return (
          <Link href={`/portfolio/${item.slug}`} className='w-full sm:w-[451px]' >
            <div className="w-full sm:w-[451px] h-[421px] relative">
              <Image alt="Images" src={item.image} fill objectFit="cover" className='rounded-2xl' />
            </div>
            <h6>{item.title}</h6>
            <span className="display text-2xl">{item.category}</span>
          </Link>
  )
}

export default PortfolioCard