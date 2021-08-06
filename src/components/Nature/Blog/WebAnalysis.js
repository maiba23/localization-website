import React from 'react';
import RoundedDialog from '../shared/windows/RoundedDialog';

const WebAnalysis = () => {
  return (
    <div className='web-analysis'>
      <div className='web-analysis-image' />
      <div className='web-analysis-dialog'>
        <RoundedDialog
          title='Web Analytics'
          content={`Behavior to data is a bit too restrictive, it doesn’t encompass the analytical and optimization side of things.
      
          We collect, transform and interpret all this amount of data into meaningful business value. We provide ongoing recommendations and carry out optimizations to improve the success of your project.`}
        />
      </div>
    </div>
  );
};

export default WebAnalysis;
