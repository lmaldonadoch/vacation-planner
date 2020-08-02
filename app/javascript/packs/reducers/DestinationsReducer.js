const initialState = {
  destinations: [
    {
      isFetching: false,
      destination: [{}],
    },
  ],
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
      };
    default:
      return state;
  }
};

export default destinationsReducer;
