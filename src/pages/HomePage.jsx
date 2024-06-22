import React from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import About from "../components/About";
import TeamSection from "../components/Team-section/TeamSection";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import { Helmet } from "react-helmet";
import LatestPost from "../components/LatestPost";
import Carousel from "../components/Carousel";
import FeatureClass from "../components/FeatureClass";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SynergyFit || Home Page</title>
        <link rel="canonical" href="https://synergy-fit.netlify.app" />
      </Helmet>
      <Banner />
      <Feature />
      <About />
      {/* <Slider /> */}
      <FeatureClass/>
      <div className="my-14">
      <Carousel />
      </div>
        
      <LatestPost />
      <Newsletter />
      {/* team section */}
      <TeamSection />
    </div>
  );
};

export default HomePage;
