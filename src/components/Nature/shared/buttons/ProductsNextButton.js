import React from 'react';
import PropTypes from 'prop-types';

import ProductsNextIcon from 'images/nature/icons/koala/products-next.svg';

const ProductsNextButton = ({ currentSlide, slideCount, ...rest }) => {
  return (
    <ProductsNextIcon
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

ProductsNextButton.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

export default ProductsNextButton;
