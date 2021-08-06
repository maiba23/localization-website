import React from 'react';
import PropTypes from 'prop-types';

const MultiLineTextBox = ({ activeColor, defaultColor, ...rest }) => {
  return (
    <div className='multiline-input'>
      <textarea className='multiline-textbox' {...rest} />
      <style jsx>
        {`
          .multiline-input {
            width: 100%;
            height: 100%;
            padding-right: 10px;
            padding-bottom: 10px;
          }
          .multiline-input > textarea {
            resize: none;
            width: 100%;
            height: 100%;
            margin: 2px auto;
            padding-right: 3px;
            border: 3px solid #000;
            font-family: Nunito;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
          }
          .multiline-input > textarea::placeholder {
            color: ${defaultColor};
            padding-top: 2px;
            padding-left: 5px;
          }

          .multiline-input > textarea:focus-visible {
            outline-color: ${activeColor};
          }
        `}
      </style>
    </div>
  );
};

MultiLineTextBox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  activeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  style: PropTypes.any,
};

export default MultiLineTextBox;
