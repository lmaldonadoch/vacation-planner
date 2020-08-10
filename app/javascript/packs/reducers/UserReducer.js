const initialState = {
  user: {},
  vacationDates: [{}],
  isFetching: false,
  loggedIn: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHING_USER':
      return {
        ...state,
        isFetching: true,
      };
    case 'ERROR_FETCHING_USER':
      return {
        ...state,
        isFetching: false,
      };
    case 'RECEIVED_USER':
      return {
        ...state,
        isFetching: false,
        loggedIn: payload.logged_in,
        user: payload.user,
        vacationDates: payload.vacation_dates,
      };

    case 'DESTROYING_SESSION':
      return {
        ...state,
        isFetching: true,
      };
    case 'SESSION_DESTROYED':
      return initialState;
    case 'ERROR_DESTROYING_SESSION':
      return {
        ...state,
        isFetching: false,
      };

    case 'LOGGING_IN_USER':
      return {
        ...state,
        isFetching: true,
      };
    case 'USER_LOGGED_IN':
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user: payload.user,
        vacationDates: payload.data.vacation_dates,
      };
    case 'ERROR_SIGNING_USER':
      return {
        ...state,
        isFetching: false,
      };

    case 'REGISTERING_USER':
      return {
        ...state,
        isFetching: true,
      };
    case 'USER_REGISTERED':
      return {
        ...state,
        isFetching: false,
        loggedIn: true,
        user: payload.data.user,
      };
    case 'REGISTRATION_ERROR':
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default userReducer;
