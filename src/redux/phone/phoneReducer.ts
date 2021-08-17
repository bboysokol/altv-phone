import { combineReducers } from 'redux';
import contactsSlice from './contacts/contacts.slice';
import diallerSlice from './dialler/dialler.slice';
import mazeBankSlice from './mazeBank/mazeBank.slice';
import messagesSlice from './messages/messages.slice';
import settingsSlice from './settings/settings.slice';

const phoneReducer = combineReducers({
  dialler: diallerSlice,
  mazeBank: mazeBankSlice,
  settings: settingsSlice,
  messages: messagesSlice,
  contacts: contactsSlice,
});

export type State = ReturnType<typeof phoneReducer>;

export default phoneReducer;
