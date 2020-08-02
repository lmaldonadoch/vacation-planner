const initialState = {
  isFetching: false,
  destinations: [{}],
};

const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCHING_DESTINATIONS':
      return {
        ...state,
        isFetching: true,
      };
    case 'RECEIVED_DESTINATIONS':
      return {
        ...state,
        isFetching: false,
        destinations: payload,
      };
    default:
      return state;
  }
};

export default destinationsReducer;
