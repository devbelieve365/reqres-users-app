export const usersAction = {
  USERS_LOADED: 'USERS_LOADED',
  USERS_REQUESTED: 'USERS_REQUESTED',
  USERS_REQUEST_FAILED: 'USERS_REQUEST_FAILED',
};

export const loadedUsers = ({users, total, totalPages}) => {
  return {
    type: usersAction.USERS_LOADED,
    payload: {
      users,
      total,
      totalPages,
    },
  };
};

export const requestedUsers = params => {
  return {
    type: usersAction.USERS_REQUESTED,
    payload: {
      params,
    },
  };
};

export const requestUsersFailed = () => {
  return {
    type: usersAction.USERS_REQUEST_FAILED,
  };
};
