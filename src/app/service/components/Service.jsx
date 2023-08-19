import HeroSection from "@/app/components/shared/HeroSection";
import ServiceDetails from "./ServiceDetails";
import ServiceVideo from "./ServiceVideo";

const Service = () => {
    const backgroundImage = '/assests/images/service/Banner.jpg';
    return (
      <div>
          <HeroSection backgroundImage={backgroundImage} title="Services" />
          <ServiceDetails />
          <ServiceVideo />
      </div>
  )
}

export default Service