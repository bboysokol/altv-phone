import { combineReducers } from 'redux';
import phoneReducer from './phone/phoneReducer';

const rootReducer = combineReducers({
  phone: phoneReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
