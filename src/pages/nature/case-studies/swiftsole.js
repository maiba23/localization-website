import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import SwiftSoleProduct from 'components/Nature/SwiftSole/SwiftSoleProduct';
import SwiftSoleIntro from 'components/Nature/SwiftSole/SwiftSoleIntro';
import SwiftSoleChallenge from 'components/Nature/SwiftSole/SwiftSoleChallenge';

const SwiftSolePage = () => {
  return (
    <NatureLayout>
      <SwiftSoleIntro />
      <SwiftSoleProduct />
      <SwiftSoleChallenge />
    </NatureLayout>
  );
};

export default SwiftSolePage;
