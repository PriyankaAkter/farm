import React from 'react'

const HeroSection = ({backgroundImage,title}) => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        // You can add other background-related styles here if needed
      };
  return (
    // <div className={`flex justify-center items-center bg-[url('/assests/images/home/BannerShop.png')] bg-center-top
    // bg-cover bg-no-repeat w-screen h-[450px]`}>
    //    <h1 className='text-primary'>Shop</h1>
    // </div>
   
      <div style={containerStyle}
        className={`flex justify-center items-center w-screen h-[280px] lg:h-[450px]`}
      >
         <h1 className='text-primary'>{title}</h1>
      </div>
    
  );
    }

export default HeroSection