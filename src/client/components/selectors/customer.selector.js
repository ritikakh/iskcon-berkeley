import { createSelector } from 'reselect'

export const customerSelector = state => state.customer;

export const customerName = createSelector(
  customerSelector,
  ({name}) => name
);

export const customerEmail = createSelector(
  customerSelector,
  ({email}) => email
);

export const customerPhone = createSelector(
  customerSelector,
  ({phone}) => phone
);

export const customerMessage = createSelector(
  customerSelector,
  ({message}) => message
);

export const customerNameLengthChecker = createSelector(
  customerName,
  name => name.length > 5
);

