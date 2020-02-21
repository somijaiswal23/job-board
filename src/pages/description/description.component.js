import React from "react";
import Hero from "../../components/hero/hero.component";
import Card from "../../components/card/card.component";
import { JOBS } from "../../Mock/data";
import "./homepage.style.scss";
function Description() {
  console.log("nikhil", JOBS);
  return (
    <>
      <Hero />
      <div className="job-container">
        <h1>Job Listing</h1>
        {JOBS.map(item => (
          <Card {...item} />
        ))}
      </div>
    </>
  );
}
export default Description;
