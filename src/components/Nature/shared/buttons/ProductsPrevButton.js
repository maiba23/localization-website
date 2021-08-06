import React from 'react';
import PropTypes from 'prop-types';

import ProductsPreviousIcon from 'images/nature/icons/koala/products-previous.svg';

const ProductsPrevButton = ({ currentSlide, slideCount, ...rest }) => {
  return (
    <ProductsPreviousIcon
      type='button'
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      {...rest}
    />
  );
};

ProductsPrevButton.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

export default ProductsPrevButton;
