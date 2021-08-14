import React from "react";
import FacebookIcon from "images/nature/icons/facebook.svg";
import PinteresteIcon from "images/nature/icons/pinterest.svg";
import TwitterIcon from "images/nature/icons/twitter.svg";

const NatureFooter = () => {
  return (
    <footer>
      <div className="social-icons">
        <FacebookIcon />
        <TwitterIcon />
        <PinteresteIcon />
      </div>
      <div className="logo-container">
        <div className="logo-container-title"> Wagency</div>
        <div className="logo-container-content">
          Solutions for your business. Wagency 2021. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NatureFooter;
