'use client'
import BlogSingleHero from './components/BlogSingleHero'
import { useParams } from 'next/navigation'
import { news1 } from '@/website/components/views/home/data'
const page = () => {
  const param = useParams()
  const blogs = news1.find(e=>e.slug==param.blog)
  console.log(blogs);
  return (
    <BlogSingleHero blogs={blogs} />
  )
}

export default page