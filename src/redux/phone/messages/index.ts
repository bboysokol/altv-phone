import * as sagaActions from './messages.saga.actions';
import * as selectors from './messages.selectors';
import { messagesSlice } from './messages.slice';

const actions = Object.assign({}, sagaActions, messagesSlice.actions);

export { selectors, actions };
