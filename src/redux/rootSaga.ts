import { all } from 'redux-saga/effects';
import { contactsSaga } from './phone/contacts/contacts.saga';
import { diallerSaga } from './phone/dialler/dialler.saga';
import { mazeBankSaga } from './phone/mazeBank/mazeBank.saga';
import { messagesSaga } from './phone/messages/messages.saga';
import { settingsSaga } from './phone/settings/settings.saga';

export default function* rootSaga() {
  yield all([mazeBankSaga(), settingsSaga(), diallerSaga(), messagesSaga(), contactsSaga()]);
}
