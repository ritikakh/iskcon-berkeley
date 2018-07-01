import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import {
  customerName,
  customerEmail,
  customerMessage,
  customerPhone,
  customerNameLengthChecker
} from '../selectors/customer.selector';

import ContactUsForm from './contact-us-form';
import { submitContactUsForm } from '../../actions/contact-us.action';

const FORM_NAME = 'contact-us';

const mapStateToProps = state => ({
  name: customerName(state),
  email: customerEmail(state),
  message: customerMessage(state),
  contactNumber: customerPhone(state),
  hasLongName: customerNameLengthChecker(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(submitContactUsForm(data))
});

let ContactUsConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsForm);

export default reduxForm({
  form: FORM_NAME
})(ContactUsConnectedForm);
