import {usersAction} from '../actions/users.action';

const initialState = {
  users: [],
  loading: false,
  total: 0,
  totalPages: 0,
  loadFailed: false,
};

export const usersReducer = (state: {} = initialState, action: {}) => {
  switch (action.type) {
    case usersAction.USERS_LOADED:
      return {
        ...state,
        users: action.payload.users,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
        loading: false,
        loadFailed: false,
      };
    case usersAction.USERS_REQUESTED:
      return {...state, loading: true, loadFailed: false};
    case usersAction.USERS_REQUEST_FAILED:
      return {...state, loading: false, loadFailed: true};
    default:
      return state;
  }
};
