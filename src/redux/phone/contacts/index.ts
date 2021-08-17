import * as selectors from './contacts.selectors';
import * as sagaActions from './contacts.saga.actions';
import { contactsSlice } from './contacts.slice';

const actions = Object.assign({}, sagaActions, contactsSlice.actions);

export { selectors, actions };
