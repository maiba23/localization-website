import React from 'react';
import ProductDevIcon from 'images/nature/icons/joinus/product-dev.svg';
import MarketingIcon from 'images/nature/icons/joinus/marketing.svg';
import ProductDesign from 'images/nature/icons/joinus/product-design.svg';

const JoinUsProduct = () => {
  return (
    <div className='joinus-product'>
      <div className='joinus-product-wrapper'>
        <div className='joinus-product-item'>
          <div className='joinus-product-item-icon'>
            <ProductDevIcon />
          </div>
          <div className='joinus-product-item-title'>Product Development</div>
          <div className='joinus-product-item-content'>
            ITIO launches products with a systematic flow that benefits
            businesses with solutions that have high impact on their clients.
          </div>
        </div>
        <div className='joinus-product-item'>
          <div className='joinus-product-item-icon'>
            <MarketingIcon />
          </div>
          <div className='joinus-product-item-title'>Marketing</div>
          <div className='joinus-product-item-content'>
            ITIO launches products with a systematic flow that benefits
            businesses with solutions that have high impact on their clients.
          </div>
        </div>
        <div className='joinus-product-item'>
          <div className='joinus-product-item-icon'>
            <ProductDesign />
          </div>
          <div className='joinus-product-item-title'>Product Design</div>
          <div className='joinus-product-item-content'>
            ITIO launches products with a systematic flow that benefits
            businesses with solutions that have high impact on their clients.
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsProduct;
