import React from "react";
import BillingSingle from "./BillingSingle";
import HeroSection from "@/website/components/shared/HeroSection";

const Billing = () => {
  const backgroundImage = "/assests/images/home/BannerShopS.jpg";
  return (
    <div>
      <HeroSection title="Billing Details" backgroundImage={backgroundImage} />
      <BillingSingle />
    </div>
  );
};

export default Billing;
