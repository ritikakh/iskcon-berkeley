import {apiContactUs} from "./action-creators";

export const submitContactUsForm = (data) => (dispatch) => {
  return fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((data) => dispatch(apiContactUs(data)))
    .catch((err) => dispatch(apiContactUs(new Error(err))));
};
