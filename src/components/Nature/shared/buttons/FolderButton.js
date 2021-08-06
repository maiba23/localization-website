import React from 'react';
import PropTypes from 'prop-types';

function FolderButton({ title, ...rest }) {
  return (
    <div className='folder-button' {...rest}>
      <span className='folder-button-icon'></span>
      <span className='folder-button-label'>{title}</span>
    </div>
  );
}

FolderButton.propTypes = {
  title: PropTypes.string,
};

export default FolderButton;
