import React from "react";
import PropTypes from "prop-types";

import NatureNavBar from "./Navbar";
import NatureFooter from "./Footer";

import "style/nature/index.scss";
import { SEO } from "components/SEO";

const NatureLayout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <div className="nature">
        <NatureNavBar />
        <main>{children}</main>
        <NatureFooter />
      </div>
    </>
  );
};
NatureLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
};

export default NatureLayout;
