import * as selectors from './dialler.selectors';
import * as sagaActions from './dialler.saga.actions';
import { diallerSlice } from './dialler.slice';

const actions = Object.assign({}, sagaActions, diallerSlice.actions);

export { selectors, actions };
