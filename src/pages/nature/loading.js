import React, { useEffect, useState } from 'react';
import NatureLayout from 'components/Nature/Layout';
import ProgressBar from 'components/Nature/shared/ProgressBar';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress((p) => (p + 1) % 100);
    }, 100);
  }, [progress]);

  return (
    <NatureLayout>
      <ProgressBar title='LOADING ...' progress={progress} />
    </NatureLayout>
  );
};

export default LoadingPage;
