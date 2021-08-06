import React from 'react';
import PropTypes from 'prop-types';

function NatureButton({ title, color, selected, ...rest }) {
  return (
    <div
      {...rest}
      className={`nature-button box-shadow-3d ${
        selected ? 'selected-botton' : ''
      }`}
    >
      {title && <span>{title}</span>}
      {rest.children}

      <style jsx>{`
        .box-shadow-3d:hover {
          box-shadow: 0px 0px 0px ${color}, 1px 1px 0px ${color},
            2px 2px 0px ${color}, 3px 3px 0px ${color}, 4px 4px 0px ${color},
            5px 5px 0px ${color}, 6px 6px 0px ${color};
        }
        .box-shadow-3d {
          box-shadow: 0px 0px 0px #000, 1px 1px 0px #000, 2px 2px 0px #000,
            3px 3px 0px #000, 4px 4px 0px #000, 5px 5px 0px #000,
            6px 6px 0px #000;
        }
        .nature-button {
          padding: 10px 14px;
          border: 3px solid #000;
          position: relative;
          margin-bottom: 6px;
          margin-right: 6px;
        }

        .nature-button > span {
          font-family: Junegull;
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 24px;
        }
        .nature-button:hover {
          border-color: ${color};
        }
        .nature-button:hover > span {
          color: ${color};
        }
        .nature-button:active {
          box-shadow: none !important;
          padding: 10px 14px;
          margin-bottom: 0px;
          margin-top: 6px;
        }

        .selected-botton {
          box-shadow: none !important;
          padding: 10px 14px;
          margin-bottom: 0px;
          margin-top: 6px;
        }
      `}</style>
    </div>
  );
}
NatureButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  selected: PropTypes.bool,
};

NatureButton.defaultProps = {
  title: '',
  color: '#9E6CFF',
  selected: false,
};

export default NatureButton;
