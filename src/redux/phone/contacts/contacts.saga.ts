import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import PhoneService from '../../../services/PhoneService';
import { addContact, getContacts, removeContacts, sendVC } from './contacts.saga.actions';
import { setContacts, setDeleteMode, setError } from './contacts.slice';

function* fetchContacts() {
  try {
    const { data } = yield call(PhoneService.getContacts);
    yield put(setContacts(data));
  } catch (error) {
    yield put(setError(error));
  }
}

function* sendVCard() {
  try {
    yield call(PhoneService.sendVCard);
  } catch (error) {
    yield put(setError(error));
  }
}

function* createContact(action: ReturnType<typeof addContact>) {
  try {
    yield put(actions.setProgress(true));
    yield call(PhoneService.addContact, action.payload);
    yield put(actions.getContacts());
    yield put(actions.setProgress(false));
  } catch (error) {
    yield put(actions.setProgress(false));
    yield put(setError(error));
  }
}

function* deleteContacts(action: ReturnType<typeof removeContacts>) {
  try {
    yield call(PhoneService.deleteContacts, action.payload);
    yield put(actions.resetIdsToDelete());
    yield put(setDeleteMode(false));
    yield put(actions.getContacts());
  } catch (error) {
    yield put(setError(error));
  }
}

export function* contactsSaga() {
  yield takeLatest(getContacts, fetchContacts);
  yield takeLatest(addContact, createContact);
  yield takeLatest(removeContacts, deleteContacts);
  yield takeLatest(sendVC, sendVCard);
}
