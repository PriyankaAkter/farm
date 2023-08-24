import NewsLetter from "@/website/components/layout/newsletter/NewsLetter";
import HeroSection from "@/website/components/shared/HeroSection";
import TeamDetails from "./TeamDetails";

const Team = () => {
    const backgroundImage = '/assests/images/home/TeamBanner.jpg';
    return (
      <div>
          <HeroSection backgroundImage={backgroundImage} title="Our Team" />
          {/* <PortfolioDetails /> */}
          <TeamDetails />
          <NewsLetter />
      </div>
  )
}

export default Team