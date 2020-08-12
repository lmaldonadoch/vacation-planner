import types from '../actions/types';

const initialState = {
  user: {},
  vacationDates: [{}],
  isFetching: false,
  loggedIn: false,
  status: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case types.ERROR_FETCHING_USER:
      return {
        ...state,
        isFetching: false,
      };
    case types.RECEIVED_USER:
      return {
        ...state,
        isFetching: false,
        loggedIn: payload.logged_in,
        user: payload.user,
        vacationDates: payload.vacation_dates,
      };

    case types.DESTROYING_SESSION:
      return {
        ...state,
        isFetching: true,
      };
    case types.SESSION_DESTROYED:
      return initialState;
    case types.ERROR_DESTROYING_SESSION:
      return {
        ...state,
        isFetching: false,
      };

    case types.LOGGING_IN_USER:
      return {
        ...state,
        isFetching: true,
      };
    case types.USER_LOGGED_IN:
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user: payload.user,
        vacationDates: payload.vacation_dates,
      };
    case types.ERROR_SIGNING_USER:
      return {
        ...state,
        isFetching: false,
      };

    case types.REGISTERING_USER:
      return {
        ...state,
        isFetching: true,
      };
    case types.USER_REGISTERED:
      return {
        ...state,
        isFetching: false,
        loggedIn: payload.data.logged_in,
        user: payload.data.user,
        status: payload.data.status,
      };
    case types.REGISTRATION_ERROR:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default userReducer;
