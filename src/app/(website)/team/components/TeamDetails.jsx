import TeamCard from "@/website/components/shared/TeamCard";
import { team } from "@/website/components/views/home/data";
import TeamInfo from "./TeamInfo";

const TeamDetails = () => {
  return (
    <div className="container py-12 lg:py-28 grid justify-items-center">
      <TeamInfo />
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-[27px] gap-y-[42px] w-fit">
        {team.map((item, index) => (
          <TeamCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
