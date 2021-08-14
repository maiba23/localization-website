import React from "react";
import FacebookIcon from "images/nature/icons/facebook.svg";
import PinteresteIcon from "images/nature/icons/pinterest.svg";
import TwitterIcon from "images/nature/icons/twitter.svg";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-us-title">Contact Us</h1>
      <div className="contact-us-content">
        Any questions? Just write us a message!
      </div>
      <div className="contact-us-info">
        <div className="contact-us-info-section1">
          <h3 className="contact-us-info-title">Contact Information</h3>
          <div className="contact-us-info-content">
            Fill up our form and our team will get back to you within 24 hours.
          </div>
        </div>
        <div className="contact-us-info-section2">
          <div className="contact-us-info-icon contact-us-info-phone">
            +57 321 6964575
          </div>
          <div className="contact-us-info-icon contact-us-info-email">
            hello@Wagency.co
          </div>
          <div className="contact-us-info-icon contact-us-info-location">
            145 Street 673
          </div>
        </div>
        <div className="contact-us-info-social">
          <FacebookIcon />
          <TwitterIcon />
          <PinteresteIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
