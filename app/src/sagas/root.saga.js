import {all, spawn, call} from 'redux-saga/effects';
import {watchUsersSaga} from './users.saga';
export default function* rootSaga() {
  const sagas = [watchUsersSaga];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {}
        }
      }),
    ),
  );
}
