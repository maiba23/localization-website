import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import colors from '../../colors'

function NavSmallButton({ title, to, color = colors[0], icon: Component }) {
  return (
    <li>
         <AniLink
          to={to}
          duration={0.7}
          paintDrip
          hex={color}
          style={{border: 'none'}}
        >
          {Component && <Component className='nav-link-icon' />}
          </AniLink>
        <AniLink
          to={to}
          duration={0.7}
          paintDrip
          hex={color}
          className='nav-link nav-link-enable'
        >
          {title}
        </AniLink>
    </li>
  );
}

NavSmallButton.propTypes = {
  selected: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.any,
  color: PropTypes.string
};

export default NavSmallButton;
