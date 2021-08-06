import React, { useCallback, useMemo, useState } from 'react';
import NatureButton from '../shared/buttons/NatureButton';
import CheckInputBox from '../shared/form/CheckInputBox';
import MultiLineTextBox from '../shared/form/MultiLineTextBox';
import TextInput from '../shared/form/TextInput';

const MessageUs = () => {
  const neededChkValues = useMemo(
    () => ['Web Design', 'Web Development', 'Logo Design', 'Other'],
    []
  );

  const [frmState, setFrmState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    need: neededChkValues[0],
    message: '',
  });

  const handleUpdateFormValue = useCallback((e) => {
    if (e.target?.name) {
      const { name, value } = e.target;
      setFrmState((state) => ({ ...state, [name]: value }));
    }
  }, []);

  const handleUpdatePhone = useCallback((e) => {
    if (e.target?.name) {
      const { name, value } = e.target;
      setFrmState((state) => ({ ...state, [name]: normalizeInput(value) }));
    }
  }, []);

  const handleSubmitClicked = useCallback(() => {
    // below function
    console.log(frmState);
  }, [frmState]);

  return (
    <div className='message-us'>
      <div className='message-us-title'>Message Us</div>
      <div className='message-us-form'>
        <form className='form-wrapper'>
          <div className='form-inputline'>
            <TextInput
              label='FirstName'
              defaultColor='#c7b0ff'
              activeColor='#9E6CFF'
              type='text'
              placeholder='John'
              className='form-text-input'
              name='firstName'
              value={frmState.firstName}
              onChange={handleUpdateFormValue}
            />
            <TextInput
              defaultColor='#c7b0ff'
              activeColor='#9E6CFF'
              label='LastName'
              type='text'
              placeholder='smith'
              className='form-text-input'
              name='lastName'
              value={frmState.lastName}
              onChange={handleUpdateFormValue}
            />
          </div>
          <div className='form-inputline'>
            <TextInput
              label='Mail'
              defaultColor='#c7b0ff'
              activeColor='#9E6CFF'
              type='email'
              name='email'
              value={frmState.email}
              onChange={handleUpdateFormValue}
              placeholder='johnsmith@gmail.com'
              className='form-text-input'
            />
            <TextInput
              defaultColor='#c7b0ff'
              activeColor='#9E6CFF'
              label='Phone'
              type='text'
              placeholder='+xx xxx xxxxxxx'
              className='form-text-input'
              name='phone'
              value={frmState.phone}
              onChange={handleUpdatePhone}
            />
          </div>
          <div className='form-checkbox-group'>
            <div className='form-checkbox-group-title'>What do you need?</div>
            <div className='form-inputline'>
              {neededChkValues.map((item) => (
                <CheckInputBox
                  key={item}
                  defaultColor='#9E6CFF'
                  activeColor='#E0D4FF'
                  label={item}
                  value={item}
                  name='need'
                  type='radio'
                  onChange={handleUpdateFormValue}
                  className='form-check-input'
                  checked={item === frmState.need}
                />
              ))}
            </div>
          </div>
          <div className='message-group'>
            <div className='message-group-title'>Message</div>
            <div className='message-group-frm form-inputline'>
              <MultiLineTextBox
                defaultColor='#c7b0ff'
                activeColor='#9E6CFF'
                placeholder='Write your message'
                name='message'
                value={frmState.message}
                onChange={handleUpdateFormValue}
              />
            </div>
            <div className='message-group-action'>
              <NatureButton
                title='Send Message'
                className='submit-btn'
                color='#9E6CFF'
                onClick={handleSubmitClicked}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MessageUs;

const normalizeInput = (value, previousValue) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue;
    if (cvLength < 7)
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
    return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
      3,
      6
    )}-${currentValue.slice(6, 10)}`;
  }
};
