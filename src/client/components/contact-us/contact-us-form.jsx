import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';

class ContactUsForm extends Component {
  render() {
    const {handleSubmit, onSubmit, name, hasLongName, email, message} = this.props;
console.log(this.props);
    return (
      <div className = "container-fluid">
        name: {name}, email: {email}, message: {message}
        <form className = "iskcon-form-container" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name: </label>
            <Field name="name" component="input" type="text" placeholder={name} />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <Field name="email" component="input" type="text" placeholder={email} />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <Field name="message" component="textarea" placeholder={message} />
          </div>
          <button className = "btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactUsForm;

