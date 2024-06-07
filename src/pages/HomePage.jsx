import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import About from "../components/About";
import TeamSection from "../components/Team-section/TeamSection";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <About />
      <Slider />
      <Newsletter />
      {/* team section */}
      <TeamSection />
    </div>
  );
};

export default HomePage;
