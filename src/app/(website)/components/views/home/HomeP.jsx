import { products } from "./data";
import ButtonOne from "../../shared/ButtonOne";
import Card from "../../layout/card/Card";

const HomeP = () => {
    const sliceProducts = products.slice(0, 8);
    return (
      <div className="container py-20 lg:py-44 ">
  
        <div className="text-center mb-10">
          <span className="display">Categories </span>
          <h2 className="text-primary">Our Products</h2>
        </div>
        {/* <div>
          {
            sliceProducts.map((item,index)=>(
              <div key={index}>
                <Card item={item} />
              </div>
            ))
          }
        </div> */}
  
        <div className=" flex flex-col gap-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
            {sliceProducts.map((item, index) => (
  
            <Card item={item} key={index} />
            ))}
          </div>
          
             <ButtonOne href='/shop' title="Learn More" className="bg-primary text-white" />
          
        </div>
      </div>
  )
}

export default HomeP