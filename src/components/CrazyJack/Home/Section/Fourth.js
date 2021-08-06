import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Section from "./index";
const FourthSection = () => (
  <Section>
    <div className="sub-section top">
      <div className="content">
        <div className="text-container">
          <h2 className="container-highlight-title triangle">Mining</h2>
          <div className="container-highlight-text bold yellow">
            <p>
              {" "}
              Every apps have data. From user behavior analytics to stock
              management all our app has data.{" "}
            </p>
            <p>
              We try to identify the best actionable data for business and
              collect it in the most efficient ways.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-section bottom">
      <div className="content">
        <div className="text-container">
          <h2 className="container-highlight-title yellow round">Analyzing</h2>
          <div className="container-highlight-text bold">
            <p>
              Having data is great but if it&apos;s sitting in a data lake doing
              nothing we are wasting ressources
            </p>
            <p>
              Our main objectives are that you can observe, interact, and
              analyze the data.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="section-background">
        <div className="bg-image-container">
          <StaticImage
            alt="Abstract blue background with building for data analysis section"
            src="../../../../images/home/BQ8.jpg"
          />
        </div>
      </div>
    </div>
  </Section>
);

export default FourthSection;
