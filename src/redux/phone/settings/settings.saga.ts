import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import PhoneService from '../../../services/PhoneService';
import { getPhoneInfo, getWallpaper, setWallpaper } from './settings.saga.actions';
import { setCurrentWallpaper, setError, setPhoneInfo } from './settings.slice';

function* phoneInfo() {
  try {
    const { data } = yield call(PhoneService.getPhoneInfo);
    yield put(setPhoneInfo(data));
  } catch (err) {
    yield put(setError(err));
  }
}

function* wallpaper(action: ReturnType<typeof setWallpaper>) {
  try {
    yield call(PhoneService.updateWallpaper, action.payload);
    yield put(actions.getWallpaper());
  } catch (err) {
    yield put(setError(err));
  }
}

function* fetchWallpaper() {
  try {
    const { data } = yield call(PhoneService.getWallpaper);
    yield put(setCurrentWallpaper(data));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* settingsSaga() {
  yield takeLatest(getPhoneInfo.type, phoneInfo);
  yield takeLatest(setWallpaper.type, wallpaper);
  yield takeLatest(getWallpaper.type, fetchWallpaper);
}
