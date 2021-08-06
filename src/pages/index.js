import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import NatureLayout from "components/Nature/Layout";
import ProductIdea from "components/Nature/Blog/ProductIdea";
import BusinessCycle from "components/Nature/Blog/BusinessCycle";
import InputToOutput from "components/Nature/Blog/InputToOutput";
import CloudInfrastructure from "components/Nature/Blog/CloudInfrastructure";
import WebAnalysis from "components/Nature/Blog/WebAnalysis";
import { FooterNav } from "components/FooterNav";

const NatureIndex = () => {
  const { t } = useTranslation();
  return (
    <NatureLayout title={t("title")}>
      <ProductIdea />
      <InputToOutput />
      <BusinessCycle />
      <WebAnalysis />
      <CloudInfrastructure />
      <FooterNav />
    </NatureLayout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default NatureIndex;
