import * as React from "react";
import Section from "./index";
import { StaticImage } from "gatsby-plugin-image";
const SecondSection = () => (
  <Section>
    <div className="sub-section top">
      <div className="content">
        <div className="text-container">
          <h2 className="container-highlight-title triangle">Frontend</h2>
          <div className="container-highlight-text bold">
            <p>
              {" "}
              From a simple idea to a complete website, Wagency supports your
              journey.
            </p>
            <p>
              With a unique esthetic, your page will not only attract the right
              visitors but engage those visitors and convert them into
              customers.{" "}
            </p>
            <p>
              {" "}
              Don&apos;t worry we&apos;ll create a site more{" "}
              <span className="highlight">serious</span> than this one!
            </p>
            <p>
              What matters the most to us is not what we think is the best but
              what make your user
              <span className="highlight">engage</span> with your site
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-section bottom">
      <div className="content">
        <div className="text-container">
          <h2 className="container-highlight-title pink round">Backend</h2>
          <div className="container-highlight-text bold">
            <p>
              {" "}
              We love developing applications and finding software solutions for
              our clients. And complex problems start with the backend.
            </p>
            <p>
              {" "}
              We will design clear design patterns to transcribe your business
              case into clean code, beautiful architecture and robust
              infrastructure{" "}
            </p>
            <p>
              We don&apos;t limit ourselves to web application, we deploy IOT
              devices, integrate with SCADA systems. Whatever our client needs
              we will make it work even if we have to find the last ALGOL
              developer on earth to make it work.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="section-background">
      <svg
        className="stripe-square-cut"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 309.9 311.78"
      >
        <g className="stripe-base" data-name="Layer 1">
          <path d="M85.6,301.4c-1.2,1.4-2.7,2.7-3.2,4.6l5.6-.6q36.15-45,72.4-89.9l-4.8-1.1Q120.65,257.75,85.6,301.4Z" />
          <path d="M47.7,305.9c-1,1.3-2.4,2.4-2.8,4.1l5.6-.6Q91,259.15,131.4,208.8l-4.8-1.1C100.4,240.4,74,273.2,47.7,305.9Z" />
          <path d="M66.3,304.1c-1,1.2-2.3,2.2-2.6,3.9l5.6-.6L146,212.1l-4.8-1.1Q103.7,257.65,66.3,304.1Z" />
          <path d="M104.2,299.6c-1.1,1.4-2.5,2.5-3,4.3l5.6-.6,68.1-84.6-4.8-1.1Q137.1,258.55,104.2,299.6Z" />
          <path d="M28.3,308.7c-.3,2.7.9,3.6,3.5,2.8q41.25-51.15,82.4-102.4l16-19.9,2.2-9.8Z" />
          <path d="M122.7,297.8c-1,1.3-2.4,2.4-2.8,4.1l5.6-.6q32-39.6,63.8-79.3l-4.8-1.1Q153.6,259.3,122.7,297.8Z" />
          <path d="M26.3,289.9c.2,1.9.4,3.8.6,5.6,1-.2,1.5-1.1,2.1-1.8l66.6-82.8c13.7-17,27.4-34.1,41.1-51.1l2.2-9.8Q82.5,219.9,26.3,289.9Z" />
          <path d="M141.3,296c-1,1.2-2.3,2.2-2.6,3.9l5.6-.6,59.5-73.9-4.8-1.1Q170.2,260.15,141.3,296Z" />
          <path d="M24.3,271.1c.2,1.9.4,3.8.6,5.6,1-.2,1.5-1.1,2.1-1.8,16.6-20.6,33.2-41.3,49.8-61.9q33.15-41.25,66.4-82.6l2.2-9.8Q84.8,195.9,24.3,271.1Z" />
          <path d="M160,294c-1,1.2-2.3,2.2-2.6,3.9l5.6-.6q27.6-34.35,55.2-68.6l-4.8-1.1Q186.7,260.75,160,294Z" />
          <path d="M179.2,291.4c-1.1,1.4-2.5,2.5-3,4.3l5.6-.6c.8-1,1.6-2,2.3-3q24.3-30.15,48.5-60.3l-4.8-1.1C211.7,251,195.4,271.2,179.2,291.4Z" />
          <path d="M22.2,252.4c.2,1.9.4,3.8.6,5.6,1-.2,1.5-1.1,2.1-1.8,11-13.7,22.1-27.4,33.1-41.1q45.9-57,91.7-113.9l2.2-9.8Q86.95,171.8,22.2,252.4Z" />
          <path d="M197.5,289.9c-1,1.2-2.3,2.2-2.6,3.9l5.6-.6c15.5-19.3,31.1-38.6,46.6-57.9l-4.8-1.1Q220,262,197.5,289.9Z" />
          <path d="M20.2,233.6c.2,1.9.4,3.8.6,5.6,1-.2,1.5-1.1,2.1-1.8l16.4-20.3Q97.8,144.5,156.2,71.8l2.2-9.7Q89.1,147.75,20.2,233.6Z" />
          <path d="M18.2,214.9c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1q70.8-88.05,141.6-176l2.2-9.8Q91.45,123.8,18.2,214.9Z" />
          <path d="M215.2,289.1c-.6.8-1.5,1.5-1.6,2.6l5.6-.6c1.9-2.4,3.8-4.7,5.7-7.1,12.2-15.2,24.4-30.3,36.6-45.5l-4.8-1.1C242.9,254.6,229.1,271.9,215.2,289.1Z" />
          <path d="M163.8,12.5Q90,104.3,16.1,196.1c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Q93.3,107.05,167.8,14.5a14.93,14.93,0,0,0,1.2-1.4l.3-1.2A48.7,48.7,0,0,1,163.8,12.5Z" />
          <path d="M234.2,286.8c-.7.9-1.7,1.6-1.8,2.9l5.6-.6,38-47.3-4.8-1.1Q252.75,263.8,234.2,286.8Z" />
          <path d="M253,284.8c-.7.9-1.6,1.6-1.8,2.9l5.6-.6c11.2-14,22.5-27.9,33.7-41.9l-4.8-1.1Q269.35,264.35,253,284.8Z" />
          <path d="M149.1,16.6c.6-.8,1.5-1.5,1.6-2.6l-5.6.6L14.1,177.4c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Q83.05,98.85,149.1,16.6Z" />
          <path d="M130.4,18.6c.6-.8,1.5-1.5,1.6-2.6l-5.6.6Q69.25,87.55,12.1,158.6c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Q72.65,90.4,130.4,18.6Z" />
          <path d="M271.7,282.8c-.7.9-1.7,1.6-1.8,2.9l5.6-.6,29.4-36.6-4.8-1.1Q286,265,271.7,282.8Z" />
          <path d="M111.6,20.7c.6-.8,1.5-1.5,1.6-2.6l-5.6.6L10.1,139.9c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Z" />
          <path d="M307.6,259.5c-5.5,6.8-11,13.7-16.5,20.5-.9,1.1-2.1,2.1-2.4,3.6l5.6-.6c4.6-5.8,9.3-11.5,13.9-17.3Z" />
          <path d="M92.9,22.7c.6-.8,1.5-1.5,1.6-2.6l-5.6.6Q48.55,71,8.1,121.2c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Q51.85,73.7,92.9,22.7Z" />
          <path d="M309,278.9c-.6.8-1.5,1.5-1.6,2.6l2.5-.3-.3-3.1A2.76,2.76,0,0,1,309,278.9Z" />
          <path d="M74.1,24.7c.6-.8,1.5-1.5,1.6-2.6l-5.6.6L6,102.4c.2,1.9.4,3.8.6,5.6,1.1-.3,1.6-1.3,2.2-2.1Q41.5,65.4,74.1,24.7Z" />
          <path d="M55.4,26.8c.6-.8,1.5-1.5,1.5-2.6l-5.6.6C35.5,44.4,19.7,64.1,3.9,83.7c.2,1.9.4,3.8.6,5.6C5.6,89,6.1,88,6.7,87.2Q31.15,56.9,55.4,26.8Z" />
          <path d="M37,28.3a3.43,3.43,0,0,0,1.2-2.2l-5.6.6Q17.3,45.75,1.9,64.8c.2,1.9.4,3.8.6,5.6.9-.2,1.3-1,1.9-1.6Q20.75,48.7,37,28.3Z" />
          <path d="M17.5,31.3c.8-1,1.9-1.7,2-3.1l-5.6.6C9.3,34.6,4.6,40.3,0,46.1c.2,1.9.4,3.8.6,5.6,1.2-.3,1.7-1.5,2.4-2.3C7.8,43.4,12.6,37.4,17.5,31.3Z" />
        </g>
        <g className="stripe-add">
          <path d="M285.9,59.4l-.7-6.2L155.6,214.3l4.8,1.1,10-12.4Q228.15,131.15,285.9,59.4Z" />
          <path d="M281.8,21.9l-.7-6.2-154.5,192,4.8,1.1c.5-.6.9-1.2,1.4-1.8Q207.35,114.45,281.8,21.9Z" />
          <path d="M283.9,40.7l-.7-6.2q-70.95,88.35-142,176.6l4.8,1.1c1.9-2.4,3.8-4.7,5.7-7.1Q217.7,122.75,283.9,40.7Z" />
          <path d="M287.9,78.2l-.7-6.2L170,217.7l4.8,1.1c10.3-12.9,20.7-25.7,31-38.6Q246.9,129.2,287.9,78.2Z" />
          <path d="M279.5,0l-3.1.3q-44.55,55.5-89.2,110.9-27.45,34.05-54.8,68.1l-2.2,9.8q74.85-93,149.6-186Z" />
          <path d="M290,96.9l-.7-6.2L184.6,220.9l4.8,1.1c6.5-8.1,13-16.2,19.6-24.3Q249.35,147.3,290,96.9Z" />
          <path d="M263.2,1.8l-5.6.6q-33.15,41.25-66.4,82.5c-17.5,21.7-34.9,43.4-52.4,65.1l-2.2,9.8q62.55-77.7,125-155.4C262.3,3.6,263.2,2.9,263.2,1.8Z" />
          <path d="M292,115.7l-.7-6.2Q245.1,166.8,199,224.3l4.8,1.1L227.5,196Q259.75,155.8,292,115.7Z" />
          <path d="M244.5,3.8l-5.6.6L189.2,66.1c-14.6,18.2-29.2,36.3-43.9,54.5l-2.2,9.8q50-62,99.8-124A4.64,4.64,0,0,0,244.5,3.8Z" />
          <path d="M294,134.4l-.7-6.2q-39.9,49.65-79.9,99.3l4.8,1.1q14-17.4,28-34.8C262.1,174,278.1,154.2,294,134.4Z" />
          <path d="M296.1,153.2l-.7-6.2q-33.75,42-67.5,83.9l4.8,1.1,32.2-40Q280.5,172.5,296.1,153.2Z" />
          <path d="M225.7,5.8l-5.6.6L186.8,47.8q-17.55,21.75-35,43.5l-2.2,9.8q37.2-46.35,74.5-92.6C224.8,7.7,225.7,7,225.7,5.8Z" />
          <path d="M298.1,171.9l-.7-6.2q-27.45,34.2-55,68.4l4.8,1.1q18.45-22.95,36.9-45.8C288.7,183.6,293.4,177.7,298.1,171.9Z" />
          <path d="M207,7.9l-5.6.6c-7.5,9.3-14.9,18.6-22.4,27.9-6.9,8.6-13.8,17.1-20.6,25.7l-2.2,9.7,49.3-61.3C206,9.7,206.9,9,207,7.9Z" />
          <path d="M188.2,9.9l-5.6.6c-5.9,7.4-11.9,14.8-17.8,22.1l-2.2,9.8c8-10,16-19.9,24-29.9C187.3,11.8,188.2,11.1,188.2,9.9Z" />
          <path d="M299.4,184.4c-14.2,17.7-28.4,35.3-42.6,53l4.8,1.1c12.8-16,25.7-31.9,38.5-47.9Z" />
          <path d="M301.5,203.2c-10.1,12.5-20.1,25-30.2,37.5l4.8,1.1,26.1-32.4Z" />
          <path d="M303.5,222c-5.9,7.4-11.8,14.7-17.8,22.1l4.8,1.1c4.5-5.7,9.1-11.3,13.6-17Z" />
          <path d="M305.5,240.7c-1.8,2.2-3.6,4.4-5.3,6.6l4.8,1.1,1.2-1.5Z" />
        </g>
      </svg>

      <div className="bg-image-container">
        <StaticImage
          alt="Nice bright green  flower background abstract"
          src="../../../../images/home/BQ5.jpg"
        />
      </div>
    </div>
  </Section>
);

export default SecondSection;
