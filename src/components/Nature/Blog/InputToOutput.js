import React from 'react';
import RoundedDialog from '../shared/windows/RoundedDialog';

const InputToOutput = () => {
  return (
    <div className='input-to-output'>
      <div className='input-to-output-image' />

      <div className='input-to-output-dialog'>
        <RoundedDialog
          title='Input to Output'
          content='Through our own automation tool, we made your work faster and easier. When you can focus on your work, we already start working/fixing your future issue...'
        />
      </div>
    </div>
  );
};

export default InputToOutput;
