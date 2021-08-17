import Conversation from 'interfaces/Messages/Conversation';
import { call, put, takeLatest } from 'redux-saga/effects';
import PhoneService from '../../../services/PhoneService';
import * as actions from './messages.saga.actions';
import { deleteConversations, getSmsById, getSmsByNumber } from './messages.saga.actions';
import { resetIdsToDelete, setConversations, setDeleteMode, setError } from './messages.slice';

function* fetchConversations() {
  try {
    const { data } = yield call(PhoneService.getSmsData);
    data.sort(
      (firstCoversation: Conversation, secondConversation: Conversation) =>
        new Date(
          secondConversation.messages[secondConversation.messages.length - 1].created,
        ).getTime() -
        new Date(firstCoversation.messages[firstCoversation.messages.length - 1].created).getTime(),
    );
    yield put(setConversations(data));
  } catch (err) {
    yield put(setError(err));
  }
}

function* fetchConversationById(action: ReturnType<typeof getSmsById>) {
  try {
    yield call(PhoneService.getSmsById, action.payload);
  } catch (err) {
    yield put(setError(err));
  }
}

function* fetchConversationByNumber(action: ReturnType<typeof getSmsByNumber>) {
  try {
    yield call(PhoneService.getSmsByNumber, action.payload);
  } catch (err) {
    yield put(setError(err));
  }
}

function* sendMessage(action: ReturnType<typeof actions.sendMessage>) {
  try {
    yield call(PhoneService.sendSms, action.payload);
  } catch (err) {
    yield put(setError(err));
  }
}

function* removeConversations(action: ReturnType<typeof deleteConversations>) {
  try {
    yield call(PhoneService.deleteConversations, action.payload);
    yield put(setDeleteMode(false));
    yield put(resetIdsToDelete());
    yield put(actions.fetchConversations());
  } catch (err) {
    yield put(setError(err));
  }
}

export function* messagesSaga() {
  yield takeLatest(actions.fetchConversations.type, fetchConversations);
  yield takeLatest(getSmsById.type, fetchConversationById);
  yield takeLatest(getSmsByNumber.type, fetchConversationByNumber);
  yield takeLatest(actions.sendMessage.type, sendMessage);
  yield takeLatest(deleteConversations.type, removeConversations);
}
