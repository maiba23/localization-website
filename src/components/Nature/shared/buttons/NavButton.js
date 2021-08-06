import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import NatureButton from './NatureButton';

function NavButton({ title, to, selected, color, ...rest }) {
  return (
    <AniLink
      to={to}
      duration={0.7}
      paintDrip
      hex={color}
      className='nature-nav-link'
    >
      <NatureButton title={title} color={color} selected={selected} {...rest} />
    </AniLink>
  );
}

NavButton.propTypes = {
  selected: PropTypes.bool,
  to: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default NavButton;
