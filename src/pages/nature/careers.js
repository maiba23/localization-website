import JoinUsHire from 'components/Nature/JoinUs/JoinUsHire';
import JoinUsIntro from 'components/Nature/JoinUs/JoinUsIntro';
import JoinUsProduct from 'components/Nature/JoinUs/JoinUsProduct';
import NatureLayout from 'components/Nature/Layout';
import React from 'react';

const CareersPage = () => {
  return (
    <NatureLayout>
      <JoinUsIntro />
      <JoinUsProduct />
      <JoinUsHire />
    </NatureLayout>
  );
};

export default CareersPage;
