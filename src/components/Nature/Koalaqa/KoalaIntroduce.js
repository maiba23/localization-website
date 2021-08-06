import React from 'react';
import KoalaImageIcon from 'images/nature/icons/koala/koala-hero.svg';
const KoalaIntroduce = () => {
  return (
    <div className='koala-introduce'>
      <h1 className='koala-introduce-title'>KoalaQA</h1>
      <span className='koala-introduce-subtitle'>
        Time to Build: 2 months and a half
      </span>
      <div className='koala-introduce-image'>
        <KoalaImageIcon />
      </div>
    </div>
  );
};

export default KoalaIntroduce;
