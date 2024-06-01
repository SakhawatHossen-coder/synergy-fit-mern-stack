import React from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import About from "../components/About";
import TeamSection from "../components/Team-section/TeamSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <About />
      {/* team section */}
      <TeamSection />
    </div>
  );
};

export default HomePage;
