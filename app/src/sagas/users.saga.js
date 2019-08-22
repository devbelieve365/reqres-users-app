import {put, takeLatest, call, all} from 'redux-saga/effects';
import Api from '../api/api';
import {
  loadedUsers,
  requestUsersFailed,
  usersAction,
} from '../actions/users.action';

function* fetchUsers(action) {
  try {
    const {params} = action.payload;
    const response = yield call(Api.getUsers, params);
    yield put(
      loadedUsers({
        users: response.data,
        total: response.total,
        totalPages: response.total_pages,
      }),
    );
  } catch (err) {
    yield put(requestUsersFailed());
  }
}

export function* watchUsersSaga() {
  yield all([takeLatest(usersAction.USERS_REQUESTED, fetchUsers)]);
}
