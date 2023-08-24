import { portfolio } from "@/website/components/views/home/data";
import PortfolioCard from "@/website/components/shared/PortfolioCard";

const PortfolioDetails = () => {
  return (
    <div className="container py-10 lg:py-36 flex justify-center items-center">
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-2 2xl:grid-cols-3 gap-y-11 gap-x-6 w-full">
        {portfolio.map((item, index) => (
          <PortfolioCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioDetails;
