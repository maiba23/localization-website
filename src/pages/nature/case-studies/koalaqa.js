import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import KoalaIntroduce from 'components/Nature/Koalaqa/KoalaIntroduce';
import Requirements from 'components/Nature/Koalaqa/Requirements';
import Products from 'components/Nature/Koalaqa/Products';
import Challenges from 'components/Nature/Koalaqa/Challenges';

const KoalaQaPage = () => {
  return (
    <NatureLayout>
      <KoalaIntroduce />
      <Requirements />
      <Products />
      <Challenges />
    </NatureLayout>
  );
};

export default KoalaQaPage;
