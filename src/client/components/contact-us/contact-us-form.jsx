import React, { Component } from "react";
import {Field, reduxForm} from 'redux-form';

class ContactUsForm extends Component {
  render() {
    const {handleSubmit, onSubmit, name, hasLongName, email, contactNumber, message, submitSucceeded} = this.props;
    return (
      <div className = "container">
        <h3 className = "iskcon-contribute">LOCATION AND CONTACT INFORMATION</h3><br />
        <label><b>Address:</b> 2334 Stuart Street, Berkeley, CA 94705, USA</label><br/>
        <label><b>Phone:</b> Shri Jagannath Swami Das: +1707 426 4672, Shri Satya Gopinath Das: +1 510-374-8583, Shri Parth Sarathy Das (Prem Chaudhary): +1 415-810-0801,<br />
          Shri Premananda Gaura Das (Dr. Pradeep Goel): +1 650-713-1812</label><br/>
        <label><b>Email:</b> iskconbayarea@gmail.com</label><br/>
        <label><b>Parking Information:</b> There are 26 parking spots on the temple property. Street parking
        is also available. On festival days, you may have to park in nearby commercial garages.</label>
        <br />
        <br />
        <div>
          <label className = "iskcon-form-head"><h4>Please fill out this form to receive details of our upcoming events and festivals:</h4></label>
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
                <label htmlFor="email">Your contact number:  </label><br/>
                <Field name="contact_number" component="input" type="text" placeholder={contactNumber} value size="60"/>
              </p>
            </div>

            <div>
              <p>
                <label htmlFor="message">Message: </label><br/>
                <Field name="message" component="textarea" placeholder={message} cols= "59" rows= "7"/>
              </p>
            </div>

            {!submitSucceeded && <button className = "btn btn-primary" type="submit">Send Message</button>}

            {submitSucceeded && <span className = "alert alert-success">Hare Krishna! Thanks for contacting us.
              We will be in touch with you shortly! In the humble service of Shri Jagannath Dev!</span>}

          </form>
        </div>
      </div>
    )
  }
}

export default ContactUsForm;

