import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import OilIntro from 'components/Nature/Oil/OilIntro';
import OilChallenge from 'components/Nature/Oil/OilChallenge';
import OilProduct from 'components/Nature/Oil/OilProduct';

const OilManagementPage = () => {
  return (
    <NatureLayout>
      <OilIntro />
      <OilProduct />
      <OilChallenge />
    </NatureLayout>
  );
};

export default OilManagementPage;
