import HeroSection from '@/website/components/shared/HeroSection'
import React from 'react'
import CheckOutDetails from './CheckOutDetails';
import NewsLetter from '@/website/components/layout/newsletter/NewsLetter';

const CheckOut = () => {
  const backgroundImage = "/assests/images/home/BannerShopS.jpg";
  return (
    <div>
        <HeroSection title="Check Out" backgroundImage={backgroundImage} />
        <CheckOutDetails />
        <NewsLetter />
    </div>
  )
}

export default CheckOut