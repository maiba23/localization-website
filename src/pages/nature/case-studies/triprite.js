import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import TripriteIntro from 'components/Nature/Triprite/TripriteIntro';
import TripriteChallenge from 'components/Nature/Triprite/TripriteChallenge';
import TripriteProduct from 'components/Nature/Triprite/TripriteProduct';

const triprite = () => {
  return (
    <NatureLayout>
      <TripriteIntro />
      <TripriteProduct />
      <TripriteChallenge />
    </NatureLayout>
  );
};

export default triprite;
