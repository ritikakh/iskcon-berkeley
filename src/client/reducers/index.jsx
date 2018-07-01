import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import customer from './customer.reducer';

export default combineReducers({
  form: formReducer,
  customer
});
