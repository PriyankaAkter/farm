import NewsLetter from "@/app/components/layout/newsletter/NewsLetter";
import HeroSection from "@/app/components/shared/HeroSection";
import TeamInfo from "@/app/team/components/TeamInfo";
import React from "react";
import AboutTeam from "./AboutTeam";
import AboutOffer from "./AboutOffer";
import AboutInfo from "./AboutInfo";
import AboutChoose from "./AboutChoose";

const About = () => {
  const backgroundImage = "/assests/images/about/AboutBanner.png";
  return (
    <div>
      <HeroSection backgroundImage={backgroundImage} title="About Us" />
      <AboutInfo />
      <AboutChoose />
      <div className="py-14 lg:py-[177px]">

        <TeamInfo />
        <AboutTeam />
        
      </div>
      <AboutOffer />
      <NewsLetter />
    </div>
  );
};

export default About;
