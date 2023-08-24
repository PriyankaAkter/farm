import Image from "next/image"

const ServiceVideo = () => {
  return (
    <div className={`bg-[url('/assests/images/service/serviceVideo.png')] grid place-items-center gap-10 xl:pt-44 2xl:pb-[538px] h-[500px] xl:h-[1073px]`}>
       <div className="text-center w-full lg:w-[671px]">
        <span className="display">Organic Only</span>
        <h2 className="text-primary mb-6">Everyday Fresh & Clean</h2>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
        <div className="grid place-items-center mt-12">
        <div className="w-[107px] h-[107px] relative">
                <Image
                  src='/assests/images/service/video.png'
                  fill
                  className="object-cover"
                  alt="Images"
                />
              </div>
        </div>
        
      </div>
    </div>
  )
}

export default ServiceVideo