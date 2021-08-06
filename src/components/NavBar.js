import * as React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const NavBar = ({ base }) => {
  return (
    <nav>
      <div className='logo-container'>
        <div className='logo'></div>
      </div>
      <ul>
        <AniLink hex='#f725a0' duration={1} cover to={`${base}`}>
          Home
        </AniLink>
        <AniLink hex='rebeccapurple' duration={1} cover to={`${base}/work`}>
          Work
        </AniLink>
        <AniLink hex='#f8f85a' duration={1} cover to={`${base}/contact`}>
          Contact
        </AniLink>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  base: PropTypes.string,
};

export default NavBar;
