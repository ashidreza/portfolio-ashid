import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Coursework from "./Coursework";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
import Education from "./Education";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <Education />
          <Skills />
          <Experiences />
          <Projects />
          <Coursework />
          <Achievements />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
