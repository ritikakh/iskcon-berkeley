import React, { Component } from 'react';
import ContactUsForm from './contact-us-form.connect';
import Menu from '../menu';
import { CONTACTUS } from '../../enums/menu.enum';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Menu page={CONTACTUS} />
        <ContactUsForm />
      </div>
    );
  }
}

export default () => {
  return <ContactUs />;
};
