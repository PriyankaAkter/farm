import React from 'react'
import HeroSection from './components/shared/HeroSection'
import Image from 'next/image'
import ButtonOne from './components/shared/ButtonOne'
const NotFound = () => {
  return (
    <div className={`bg-[url('/assests/images/home/notFound.png')] bg-cover bg-center bg-no-repeat xl:pt-[200px] 2xl:pb-[214px] md:pl-[400px] xl:pl-[650px]  2xl:pl-[1127px]  px-5 h-[479px] xl:h-screen`}>
        <span className='text-[#8FA8A8] font-black text-[150px]'>404</span>
        <h1 className='mb-4'>Page not found</h1>
        <p className='mb-4'>The page you are looking for doesn't exist or has been moved</p>
        <ButtonOne title="Go to HomePage" href="/" className="bg-primary text-white" className1="bg-[#335B6B]" />
    </div>
  )
}

export default NotFound