import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

export const SEO = ({ title, lang }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <meta charSet="utf-9" />
      <title>{title}</title>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  title: "ITIO, your web agency",
  lang: "en",
};
