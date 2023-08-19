import News from "@/app/components/shared/News"
import { news1 } from "@/app/components/views/home/data"
const BlogDetails = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-x-12 gap-y-28 w-screen mx-auto container py-10 xl:py-28">
          {news1.map((item, index) => (
            <News item={item} key={index} />
          ))}               
        </div>
  )
}

export default BlogDetails