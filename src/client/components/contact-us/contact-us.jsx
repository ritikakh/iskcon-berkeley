import React, { Component } from 'react';
import ContactUsForm from './contact-us-form.connect';
import Menu from '../menu';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Menu />
        <ContactUsForm />
      </div>
    )
  }
}

export default () => {
  return <ContactUs />;
}
