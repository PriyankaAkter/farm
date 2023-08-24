import HeroSection from "@/website/components/shared/HeroSection";
import ServicesDetails from "./ServicesDetails";

const Services = () => {
    const backgroundImage = '/assests/images/service/Background.jpg';
    return (
      <div>
          <HeroSection backgroundImage={backgroundImage} title="Quality Standard" />
          <ServicesDetails />
      </div>
  )
}

export default Services