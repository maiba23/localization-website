import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import ProductIdea from 'components/Nature/Blog/ProductIdea';
import BusinessCycle from 'components/Nature/Blog/BusinessCycle';
import InputToOutput from 'components/Nature/Blog/InputToOutput';
import CloudInfrastructure from 'components/Nature/Blog/CloudInfrastructure';
import WebAnalysis from 'components/Nature/Blog/WebAnalysis';

const NatureIndex = () => {
  return (
    <NatureLayout>
      <ProductIdea />
      <InputToOutput />
      <BusinessCycle />
      <WebAnalysis />
      <CloudInfrastructure />
    </NatureLayout>
  );
};

export default NatureIndex;
