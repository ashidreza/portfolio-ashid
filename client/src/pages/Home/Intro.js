import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const { intro } = portfolioData;
  const { firstName, middleName, lastName, welcomeText, description, caption } =
    intro;
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        {firstName || ""} {middleName || ""} {lastName || ""}
      </h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-2/3">{description || ""}</p>
    </div>
  );
}

export default Intro;
