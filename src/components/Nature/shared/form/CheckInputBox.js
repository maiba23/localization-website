import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const CheckInputBox = ({
  label,
  checked,
  className,
  activeColor,
  defaultColor,
  style,
  onChange,
  ...rest
}) => {
  const ref = useRef(null);
  return (
    <div
      className={`check-input ${className || ''}`}
      style={style || {}}
      onClick={() => onChange(ref.current)}
    >
      <input
        type='checkbox'
        {...rest}
        checked={checked ? 'checked' : ''}
        onChange={onChange}
        ref={ref}
      />
      <span className='check-input-icon'>
        {checked ? (
          <SelectedIcon color={defaultColor} />
        ) : (
          <DeselectedIcon color={activeColor} />
        )}
      </span>
      <span className='check-input-label'>{label}</span>
      <style jsx>{`
        .check-input {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
        }
        .check-input-label {
          margin-left: 11px;

          font-family: Nunito;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 25px;

        }
        .check-input-icon svg {
          transition: background 0.2s ease;
        }
        .check-input input {
          opacity: 0;
          position: absolute;
          cursor: pointer;

        }
      `}</style>
    </div>
  );
};
CheckInputBox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  activeColor: PropTypes.string,
  defaultColor: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  style: PropTypes.any,
};

export default CheckInputBox;

const DeselectedIcon = ({ color, ...rest }) => (
  <svg
    width='23'
    height='23'
    viewBox='0 0 23 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <circle
      cx='11.8518'
      cy='11.218'
      r='9.52273'
      stroke={color}
      strokeWidth='3'
    />
  </svg>
);
DeselectedIcon.propTypes = {
  color: PropTypes.string,
};

const SelectedIcon = ({ color, ...rest }) => (
  <svg
    width='23'
    height='23'
    viewBox='0 0 23 23'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}
  >
    <circle
      cx='11.4007'
      cy='11.218'
      r='9.52273'
      fill={color}
      stroke='black'
      strokeWidth='3'
    />
    <path
      d='M6.80957 10.2991L10.0245 13.9734L16.9137 7.54346'
      stroke='black'
      strokeWidth='3'
    />
  </svg>
);

SelectedIcon.propTypes = {
  color: PropTypes.string,
};
