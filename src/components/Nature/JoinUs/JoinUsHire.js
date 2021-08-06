import React from 'react';
import NatureButton from '../shared/buttons/NatureButton';

const JoinUsHire = () => {
  return (
    <div className='joinus-hire'>
      <h3 className='joinus-hire-title'>We’re Hiring</h3>
      <span className='joinus-hire-subtitle'>
        Work at the most dynanic and sucessful agency.
      </span>
      <div className='job-board'>
        <div className='job-board-item'>
          <div className='job-board-item-detail'>
            <div className='job-board-item-wrapper'>
              <div className='job-board-item-title'>WordPress Developer</div>
              <div className='job-board-item-position'>Colombia / Remote</div>
            </div>
            <div className='job-board-item-content'>
              Work at the most dynanic and sucessful agency: We’re hiring.
            </div>
          </div>
          <div className='job-board-action'>
            <NatureButton title='APPLY NOW' />
          </div>
        </div>
        <div className='job-board-item'>
          <div className='job-board-item-detail'>
            <div className='job-board-item-wrapper'>
              <h3 className='job-board-item-title'>Product Designer</h3>
              <div className='job-board-item-position'>Colombia / Remote</div>
            </div>
            <div className='job-board-item-content'>
              Work at the most dynanic and sucessful agency: We’re hiring.
            </div>
          </div>
          <div className='job-board-action'>
            <NatureButton title='APPLY NOW' />
          </div>
        </div>
        <div className='job-board-item'>
          <div className='job-board-item-detail'>
            <div className='job-board-item-wrapper'>
              <h3 className='job-board-item-title'>Marketing Manager</h3>
              <div className='job-board-item-position'>Colombia / Remote</div>
            </div>
            <div className='job-board-item-content'>
              Work at the most dynanic and sucessful agency: We’re hiring.
            </div>
          </div>
          <div className='job-board-action'>
            <NatureButton title='APPLY NOW' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsHire;
