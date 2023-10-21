import React from "react";
import "./home.css";
import Intro from "./intro";
import Content from "./content";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="img_logo">
        <img src="src\assets\logoncc-1.png" alt="" className="home__img" />
      </div>
      <div className="intro_container">
        <Intro />
      </div>
      <div className="content_container">
        <Content />
      </div>
    </section>
  );
};

export default Home;
