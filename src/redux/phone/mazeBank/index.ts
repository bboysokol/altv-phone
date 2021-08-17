import * as sagaActions from './mazeBank.saga.actions';
import * as selectors from './mazeBank.selectors';
import { mazeBankSlice } from './mazeBank.slice';

const actions = Object.assign({}, sagaActions, mazeBankSlice.actions);

export { selectors, actions };
