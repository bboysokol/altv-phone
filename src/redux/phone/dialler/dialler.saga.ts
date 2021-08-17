import { call, put, takeLatest } from 'redux-saga/effects';
import { hideCursor } from '../../../services/AltService';
import PhoneService from '../../../services/PhoneService';
import { CallState } from './dialler.slice';
import { actions } from './index';

function* makeCall(action: ReturnType<typeof actions.makeCall>) {
  try {
    const { data } = yield call(PhoneService.startCall, action.payload);
    if (data.status === 5) {
      yield put(actions.setCallState(CallState.notReachable));
      return;
    }
    if (data.status === 6) {
      yield put(actions.setCallState(CallState.busy));
      yield call(hideCursor, 'CEF_PHONE');
      return;
    }
    yield put(actions.setCallState(CallState.pending));
    yield call(hideCursor, 'CEF_PHONE');
  } catch (error) {
    console.error(error);
  }
}

function* updateCallLogs() {
  try {
    const { data } = yield call(PhoneService.getCallLog);
    yield put(actions.setCallLogs(data));
  } catch (error) {
    console.error(error);
  }
}

function* acceptCall() {
  try {
    yield call(PhoneService.answerCall);
    yield put(actions.setCallState(CallState.active));
    yield put(actions.setCallStart(new Date()));
    yield call(hideCursor, 'CEF_PHONE');
  } catch (e) {
    console.error(e);
  }
}

function* endCall() {
  try {
    yield call(PhoneService.cancelCall);
    yield put(actions.setCallState(CallState.ended));
    yield new Promise((r) => setTimeout(r, 1500));
    yield put(actions.setCallState(CallState.none));
    yield put(actions.setCallNumber(''));
  } catch (e) {
    console.error(e);
  }
}

function* speakerChange(action: ReturnType<typeof actions.speakerStatusChange>) {
  try {
    yield call(PhoneService.speakerStatusChange);
    yield put(actions.setSpeakerphone(action.payload));
  } catch (e) {
    console.error(e);
  }
}

export function* diallerSaga() {
  yield takeLatest(actions.makeCall.type, makeCall);
  yield takeLatest(actions.acceptCall.type, acceptCall);
  yield takeLatest(actions.endCall.type, endCall);
  yield takeLatest(actions.speakerStatusChange.type, speakerChange);
  yield takeLatest(actions.getCallLogs.type, updateCallLogs);
}
