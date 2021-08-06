import React from 'react';

const TripriteChallenge = () => {
  return (
    <div className='triprite-challenge'>
      <h3 className='triprite-challenge-title'>Challenge</h3>
      <div className='triprite-challenge-content'>
        {`The biggest challenge was that I had to work with an extremely poorly designed third party API (full of inconsistent naming and unexpected answers). So it was extremely important for us to write some really nice facades to interact with it seamlessly, and have clear reusable code. 

        The other challenge was to have a responsive website. It was especially tricky to have all the filter features display on mobile. `}
      </div>
      <div className='triprite-challenge-image'></div>
    </div>
  );
};

export default TripriteChallenge;
