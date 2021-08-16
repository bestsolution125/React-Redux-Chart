import { all } from 'redux-saga/effects';
import dashboardSagas from './dashboard/saga';

export default function* rootSaga() {
  yield all([
    dashboardSagas(),
  ]);
}
