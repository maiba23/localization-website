import React from 'react';

const TripriteProduct = () => {
  return (
    <div className='triprite-product'>
      <h3 className='triprite-product-title'>The product</h3>
      <div className='triprite-product-content'>
        We built a website that could also be downloaded as a mobile
        application. It did everything you can imagine from a flight search
        engine:{' '}
      </div>
      <div className='triprite-product-image'>
        <span>
          The backend includes payment processing, an email management system,
          and advanced logs. All the data is accessible through an admin
          dashboard.
        </span>
      </div>
    </div>
  );
};

export default TripriteProduct;
