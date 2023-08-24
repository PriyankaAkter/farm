import HeroSection from '@/website/components/shared/HeroSection'
import React from 'react'
import PortfolioDetails from './PortfolioDetails';
import NewsLetter from '@/website/components/layout/newsletter/NewsLetter';

const Portfolio = () => {
    const backgroundImage = '/assests/images/portfolio/Banner.png';
    return (
      <div>
          <HeroSection backgroundImage={backgroundImage} title="Quality Standard" />
          <PortfolioDetails />
          <NewsLetter />
      </div>
  )
}

export default Portfolio