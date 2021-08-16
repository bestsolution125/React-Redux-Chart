import {
  all, takeEvery, put, fork
} from 'redux-saga/effects';
import axios from 'axios';
import config from 'src/config/constants';
import actions from './actions';

export function* getBarRequest() {
  // eslint-disable-next-line func-names
  yield takeEvery(actions.GET_BAR_REQUEST, function* () {
    try {
      const res = yield axios.get(`${config.BACKEND_API}bar`);
      yield put({
        type: actions.GET_BAR_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      yield put({ type: actions.GET_BAR_ERROR });
    }
  });
}

export function* getLineRequest() {
  // eslint-disable-next-line func-names
  yield takeEvery(actions.GET_LINE_REQUEST, function* () {
    try {
      const res = yield axios.get(`${config.BACKEND_API}line`);
      yield put({
        type: actions.GET_LINE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      yield put({ type: actions.GET_LINE_ERROR });
    }
  });
}
export function* getPieRequest() {
  // eslint-disable-next-line func-names
  yield takeEvery(actions.GET_PIE_REQUEST, function* () {
    try {
      const res = yield axios.get(`${config.BACKEND_API}pie`);
      yield put({
        type: actions.GET_PIE_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      yield put({ type: actions.GET_PIE_ERROR });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(getBarRequest),
    fork(getLineRequest),
    fork(getPieRequest)
  ]);
}
