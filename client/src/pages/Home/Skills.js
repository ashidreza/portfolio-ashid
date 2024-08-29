import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Skills() {
  const { portfolioData } = useSelector((state) => state.root);
  const { skills } = portfolioData;

  return (
    <div>
      <SectionTitle title="Skills" />
      {skills.map((skill, ind) => (
        <div className="py-5">
          <div className="py-5">
            <h1 className="text-tertiary text-xl">{skill.skillTag}</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {skill.skillSet.map((skill, index) => (
              <div className="border rounded-md border-secondary py-3 px-4">
                <h1 className="text-tertiary">{skill}</h1>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
