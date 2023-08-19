import { team } from "@/app/components/views/home/data";
import TeamCard from "@/app/components/shared/TeamCard";
const AboutTeam = () => {
  const sliceTeam = team.slice(0,3);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[27px] gap-y-[42px] container">
        {sliceTeam.map((item, index) => (
          <TeamCard item={item} key={index} />
        ))}
      </div>
  )
}

export default AboutTeam