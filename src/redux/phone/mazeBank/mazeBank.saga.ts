import { call, put, takeLatest } from 'redux-saga/effects';
import BankService from '../../../services/BankService';
import { getBankAccount, sendBankTransfer } from './mazeBank.saga.actions';
import { setBankData, setError, setProgress, setTransferStatus } from './mazeBank.slice';

function* bankAccount(action: ReturnType<typeof getBankAccount>) {
  try {
    yield put(setProgress(true));
    const { data } = yield call(BankService.getBankAccount, action.payload);
    yield put(setBankData(data));
    yield put(setProgress(false));
  } catch (err) {
    yield put(setError(err));
    yield put(setProgress(false));
  }
}

function* bankTransfer(action: ReturnType<typeof sendBankTransfer>) {
  try {
    yield put(setProgress(true));
    yield call(BankService.sendBankTransfer, action.payload);
    yield put(setTransferStatus(true));
    yield put(setProgress(false));
  } catch (err) {
    yield put(setError(err));
    yield put(setTransferStatus(false));
    yield put(setProgress(false));
  }
}

export function* mazeBankSaga() {
  yield takeLatest(getBankAccount.type, bankAccount);
  yield takeLatest(sendBankTransfer.type, bankTransfer);
}
