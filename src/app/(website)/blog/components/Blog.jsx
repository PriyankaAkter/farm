import HeroSection from '@/website/components/shared/HeroSection'
import React from 'react'
import BlogDetails from './BlogDetails';
import NewsLetter from '@/website/components/layout/newsletter/NewsLetter';

const Blog = () => {
    const backgroundImage = '/assests/images/home/BannerBlog.png';
  return (
    
    <div>
        <HeroSection title="Recent News" backgroundImage={backgroundImage} />
        <BlogDetails />
        <NewsLetter />
    </div>
  )
}

export default Blog