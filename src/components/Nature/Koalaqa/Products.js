import React from 'react';
import Slider from 'react-slick';

import ProductsArrowIcon from 'images/nature/icons/koala/products-arrow.svg';
import ProductsWarningIcon from 'images/nature/icons/koala/products-warning.svg';
import ProductsCheckIcon from 'images/nature/icons/koala/products-check.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductsNextButton from '../shared/buttons/ProductsNextButton';
import ProductsPrevButton from '../shared/buttons/ProductsPrevButton';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        nextArrow: <ProductsNextButton />,
        prevArrow: <ProductsPrevButton />,
      },
    },
  ],
};

const Products = () => {
  return (
    <div className='products'>
      <h3 className='products-title'>The product</h3>
      <Slider className='products-slider' {...sliderSettings}>
        <div>
          <div className='products-item'>
            <div className='products-item-icon'>
              <ProductsArrowIcon />
            </div>
            <span className='products-item-content'>
              {`The Koala platform allowed web developers,
            UI/UX designers copywriters to login
            to log in issues with a website.`}
            </span>
          </div>
        </div>
        <div>
          <div className='products-item'>
            <div className='products-item-icon'>
              <ProductsWarningIcon />
            </div>
            <span className='products-item-content'>
              {`Maybe there is a typo somewhere.
            Maybe a link was directed to a dead page.
          Maybe the layout is a little bit odd.
          If there is any problem, a registered
          user can alert the website owner.`}
            </span>
          </div>
        </div>
        <div>
          <div className='products-item'>
            <div className='products-item-icon'>
              <ProductsCheckIcon />
            </div>
            <span className='products-item-content'>
              {`The owners can even integrate their favorite
            project management tool so that the newly
            issued bug shows up directly in their workflow.`}
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Products;
