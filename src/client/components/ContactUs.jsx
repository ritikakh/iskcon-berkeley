import React, { Component } from 'react';
import ContactUsForm from './contact-us.form';

class ContactUs extends Component {
  render() {
    const onSubmit = (values) => {
      console.log(values);
      return false;
    };

    return <ContactUsForm onSubmit={onSubmit} />
  }
}

export default () => {
  return <ContactUs />;
}
