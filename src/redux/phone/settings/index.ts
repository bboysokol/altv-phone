import * as sagaActions from './settings.saga.actions';
import * as selectors from './settings.selectors';
import { settingsSlice } from './settings.slice';

const actions = Object.assign({}, sagaActions, settingsSlice.actions);

export { selectors, actions };
