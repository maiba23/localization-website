import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import EnergeIntro from 'components/Nature/Energy/EnergeIntro';
import ManageOwnPower from 'components/Nature/Energy/ManageOwnPower';
import AutonomyPower from 'components/Nature/Energy/AutonomyPower';

const EnergePage = () => {
  return (
    <NatureLayout>
      <EnergeIntro />
      <ManageOwnPower />
      <AutonomyPower />
    </NatureLayout>
  );
};

export default EnergePage;
