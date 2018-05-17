import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';
import Menu from "./menu";

let ContactUsForm = props => {
  const {handleSubmit, onSubmit} = props;
  return (
    <div className = "container-fluid">
      <Menu/>
      <form className = "iskcon-form-container" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name: </label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <Field name="message" component="input" type="textarea" />
        </div>
        <button className = "btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
    )
};

ContactUsForm = reduxForm({
  form: 'contact'
})(ContactUsForm);

export default ContactUsForm



