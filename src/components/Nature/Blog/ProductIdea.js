import React from 'react';
import RoundedDialog from '../shared/windows/RoundedDialog';

const ProductIdea = () => {
  return (
    <div className='product-idea'>
      <div className='product-idea-dialog'>
        <RoundedDialog
          title='Product to Idea'
          content='From a simple idea to a complete website, ITIO supports your journey. Close to our clients, our goal is to understand what works for you, then develop it into an efficient and performant website.'
        />
      </div>
      <div className='product-idea-image' />
    </div>
  );
};

export default ProductIdea;
