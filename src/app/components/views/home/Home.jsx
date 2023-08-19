import React from 'react'
import HomeHero from './HomeHero'
import HomeOffer from './HomeOffer'
import HomeProducts from './HomeProducts'
import HomeTestimonial from './HomeTestimonial'
import HomeProductAll from './HomeProductAll'
import HomeCategory from './HomeCategory'
import HomeAbout1 from './HomeAbout1'
import HomeEco from './HomeEco'
import HomeNews from './HomeNews'
import NewsLetter from '../../layout/newsletter/NewsLetter'
import HomeP from './HomeP'
// import Footer from '../../layout/Footer/Footer'



const HomeAll = () => {
  return (
    <main>
        <HomeHero />
        <HomeOffer />
        <HomeAbout1 />
        <HomeProducts />
        {/* <HomeP /> */}
        <HomeTestimonial />
        <HomeProductAll />
        <HomeEco />
        <HomeCategory />
        <HomeNews />
        <NewsLetter />
        {/* <Footer /> */}
    </main>
  )
}

export default HomeAll