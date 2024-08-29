import React from "react";
import SectionTitle from "../../components/SectionTitle";
//import { education } from "../../resources/education";
import { useSelector } from "react-redux";

function Education() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { education } = portfolioData;
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((educations, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {educations.schoolName}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {education[selectedItemIndex].course}
          </h1>
          <h1 className="text-tertiary text-xl">
            {education[selectedItemIndex].year}
          </h1>
          <h1 className="text-tertiary text-xl">
            {education[selectedItemIndex].place}
          </h1>
          <p className="text-white">
            {education[selectedItemIndex].percentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
