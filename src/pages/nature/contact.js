import React from 'react';
import NatureLayout from 'components/Nature/Layout';
import ContactUs from 'components/Nature/Contact/ContactUs';
import MessageUs from 'components/Nature/Contact/MessageUs';

const ContactUsPage = () => {
  return (
    <NatureLayout>
      <ContactUs />
      <MessageUs />
    </NatureLayout>
  );
};

export default ContactUsPage;
