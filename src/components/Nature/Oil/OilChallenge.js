import React from 'react';
import ReliablityIcon from 'images/nature/icons/oil/reliability.svg';
import PhysicalSecurityIcon from 'images/nature/icons/oil/physical-security.svg';

const OilChallenge = () => {
  return (
    <div className='oil oil-challenge'>
      <h3 className='oil-challenge-title'>Challenges</h3>
      <div className='oil-challenge-content'></div>
      <div className='oil-challenge-explain-wrapper'>
        <div className='oil-challenge-explain'>
          <div className='oil-challenge-explain-image'>
            <ReliablityIcon />
          </div>
          <div className='oil-challenge-explain-subtitle'>Reliability</div>
          <div className='oil-challenge-explain-content oil-challenge-explain-reliability'></div>
        </div>
        <div className='oil-challenge-explain'>
          <div className='oil-challenge-explain-image'>
            <PhysicalSecurityIcon />
          </div>
          <div className='oil-challenge-explain-subtitle'>
            Physical Security
          </div>
          <div className='oil-challenge-explain-content oil-challenge-explain-physical'></div>
        </div>
      </div>
    </div>
  );
};

export default OilChallenge;
