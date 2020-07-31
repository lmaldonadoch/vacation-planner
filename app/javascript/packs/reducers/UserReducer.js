const initialState = {
  name: null,
  appointments: [{}],
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
        loggedIn: true,
        name: payload.user.name,
        appointments: payload.appointments,
      };
    default:
      return state;
  }
};

export default userReducer;
