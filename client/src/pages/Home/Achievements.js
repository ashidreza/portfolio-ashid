import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Achievements() {
  const { portfolioData } = useSelector((state) => state.root);
  const { achievements } = portfolioData;
  const [achieved] = achievements;
  return (
    <div>
      <SectionTitle title="Achievements" />
      {achieved.achievementSet.map((achievement, index) => (
        <div className="px-4">
          <li className="text-white list-disc">
            <ul className="text-white text-lg">{achievement}</ul>
          </li>
        </div>
      ))}
    </div>
  );
}

export default Achievements;
