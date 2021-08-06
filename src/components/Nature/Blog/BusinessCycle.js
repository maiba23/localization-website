import React from 'react';
import RoundedDialog from '../shared/windows/RoundedDialog';

const BusinessCycle = () => {
  return (
    <div className='business-cycle'>
      <div className='business-cycle-dialog'>
        <RoundedDialog
          title='Business Cycle'
          content={`With an unique and esthetic site, your page will not only attract
           the right visitors but engage those visitors and convert them into customers.
         
           The ITIO team will provide a meaningful and relevant experience to your users.`}
        />
      </div>
      <div className='business-cycle-image' />
    </div>
  );
};

export default BusinessCycle;
