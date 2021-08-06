import React from 'react';
import PropTypes from 'prop-types';
import ActionIcon from 'images/nature/icons/windowaction.svg';

const RoundedDialog = ({ title, content, ...rest }) => {
  return (
    <div className='rounded-dialog' {...rest}>
      <div className='rounded-dialog-wrapper'>
        <div className='rounded-dialog-taskbar'>
          <ActionIcon />
          <ActionIcon />
          <ActionIcon />
        </div>
        <div className='rounded-dialog-content-wrapper'>
          <div className='title'>{title}</div>
          <div className='rounded-content-wrapper'>
            <div className='content'>{content}</div>
          </div>
        </div>
      </div>
      <div className='rounded-dialog-shadow' />
    </div>
  );
};

RoundedDialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default RoundedDialog;
