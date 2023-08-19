import HeroSection from '@/app/components/shared/HeroSection'
import React from 'react'
import ContactDetails from './ContactDetails';
import ContactLocation from './ContactLocation';
import ContactForm from './ContactForm';
import NewsLetter from '@/app/components/layout/newsletter/NewsLetter';

const Contact = () => {
    const backgroundImage = '/assests/images/contact/banner.jpg';
  return (
    <div>
        <HeroSection backgroundImage={backgroundImage} title="Contact Us" />
        <ContactDetails />
        <ContactLocation />
        <ContactForm />
        <NewsLetter />
    </div>
  )
}

export default Contact