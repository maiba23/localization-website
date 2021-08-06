import React from 'react';
import RequirementsImage from 'images/nature/icons/koala/requirements.svg';

const Requirements = () => {
  return (
    <div className='requirements'>
      <h3 className='requirements-subtitle'>Requirements</h3>
      <span className='requirements-content'>
        {`We built KoalaQA from the ground up. 
        The Koala team wanted to build a visual bug tracking tool for 
        websites. The main goal was to allow website owners to get clear 
        feedback across all platforms (Mobile, Chrome, Safari, desktop..).`}
      </span>
      <div className='requirements-image'>
        <RequirementsImage />
      </div>
    </div>
  );
};

export default Requirements;
