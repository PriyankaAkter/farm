'use client'
import PortfolioSingleHero from './components/PortfolioSingleHero'
import { useParams } from 'next/navigation'
import { portfolio } from '@/website/components/views/home/data'
const page = () => {
  const param = useParams()
  const portfolios = portfolio.find(e=>e.slug==param.prtfolio)
  console.log(portfolios);
  return (
    <PortfolioSingleHero portfolios={portfolios} />
  )
}

export default page