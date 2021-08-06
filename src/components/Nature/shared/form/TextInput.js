import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  label,
  className,
  activeColor,
  defaultColor,
  style,
  ...rest
}) => {
  const frmInputId = useMemo(() => 'frm' + new Date().valueOf(), []);
  const frmLabelId = 'lbl' + frmInputId;

  return (
    <div className={`textinput-frm ${className || ''}`} style={style || {}}>
      <input id={frmInputId} {...rest} />
      <label
        id={frmLabelId}
        htmlFor={frmInputId}
        className='textinput-frm-label'
      >
        {label}
      </label>

      <style jsx>{`
        .textinput-frm {
          display: flex;
          flex-direction: column-reverse;
        }
        .textinput-frm:hover > label {
          color: ${activeColor};
        }
        .textinput-frm:hover > input {
          border-color: ${activeColor};
        }
        .textinput-frm > label {
          display: block;

          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 22px;
          color: ${defaultColor};
        }
        .textinput-frm > input {
          display: block;
          padding: 9px 14px;
          border-color: ${defaultColor};
          border-style: solid;
          border-radius: 0;
          box-shadow: none;
          caret-color: ${defaultColor};

          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;

          color: #000000;
        }
        .textinput-frm > input::-webkit-input-placeholder {
          color: ${defaultColor};
          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;
        }
        #${frmInputId}:focus + #${frmLabelId} {
          color: ${activeColor};
        }
        .textinput-frm > input:focus-visible,
        .textinput-frm > input:hover {
          outline-color: ${activeColor};
        }
      `}</style>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  activeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  style: PropTypes.any,
};

export default TextInput;
