import React from "react";
import "./hero.style.scss";
import HeroImg from "../../images/hero.jpg";
const Hero = ({ heading, subText }) => {
  return (
    <div
      className="hero-image"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${HeroImg})`
      }}
    >
      <div className="hero-text">
        <h1>
          <strong>{heading ? heading : "One million success stories."}</strong>
        </h1>
        <p>{subText ? subText :'Find Jobs, Employment & Career Opportunities'}</p>
      </div>
    </div>
  );
};
export default Hero;
