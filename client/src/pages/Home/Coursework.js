import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Coursework() {
  const { portfolioData } = useSelector((state) => state.root);
  const { courseworks } = portfolioData;
  const [courses] = courseworks;
  return (
    <div>
      <SectionTitle title="Coursework" />
      <div>
        {courses.courseworkSet.map((course, index) => (
          <div className="px-4">
            <li className="text-white list-disc">
              <ul className="text-white text-lg">{course}</ul>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coursework;
