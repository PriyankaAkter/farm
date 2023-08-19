import HeroSection from '@/app/components/shared/HeroSection'
import React from 'react'
import PortfolioDetails from './PortfolioDetails';
import NewsLetter from '@/app/components/layout/newsletter/NewsLetter';

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