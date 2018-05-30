import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';

class ContactUsForm extends Component {
  render() {
    const {handleSubmit, onSubmit, name, hasLongName, email, message} = this.props;
    return (
      <div className = "container">
        <h3 className = "iskcon-contribute">LOCATION AND CONTACT INFORMATION</h3><br/>
        <label><b>Address:</b> 2334 Stuart Street, Berkeley, CA 94705, USA</label><br/>
        <label><b>Phone:</b> +1 650-713-1812</label><br/>
        <label><b>Email:</b> iskconbayarea@gmail.com</label><br/>
        <label><b>Parking Information:</b> There are 12 parking spots on the temple property. Street parking
        is also available. On festival days, you may have to park in nearby commercial garages.</label>
        <div>
          <label className = " iskcon-label">Please fill out the form below to add any suggestions, comments or complaints.</label>
        </div>
        <div className = "container-fluid">
          {/*name: {name}, email: {email}, message: {message}*/}
          <form className = "iskcon-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>
                <label htmlFor="name">Your name:  </label><br/>
                <Field name="name" component="input" type="text" placeholder={name} value size="60"/>
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="email">Your email address:  </label><br/>
                <Field name="email" component="input" type="text" placeholder={email} value size="60"/>
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="message">Message: </label><br/>
                <Field name="message" component="textarea" placeholder={message} cols= "59" row= "7"/>
              </p>
            </div>

            <button className = "btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactUsForm;

