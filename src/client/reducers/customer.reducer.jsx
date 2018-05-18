import { handleActions } from "redux-actions";
import { API_POST_CONTACT_US} from "../actions/types";


const initialState = {
  name: "Name",
  email: "someone@xyz.com",
  message: "Your message here"
};

export default handleActions(
  {
    [API_POST_CONTACT_US]: (state, {payload}) => {
      return {
        ...state,
        ...payload
      }
    }
  }, initialState
);
