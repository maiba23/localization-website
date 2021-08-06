import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ title, progress, ...rest }) => {
  const width = progress < 0 ? 0 : progress > 100 ? 100 : progress;
  return (
    <div className='progress-bar' {...rest}>
      <div className='progress-bar-title'>{title}</div>
      <div className='progress-bar-content'>
        <span style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};
ProgressBar.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number || PropTypes.string,
};
export default ProgressBar;
