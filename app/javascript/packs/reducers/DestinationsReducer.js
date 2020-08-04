const initialState = {
  isFetching: false,
  destinations: [{}],
  status: '',
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
    case 'ERROR_FETCHING_DESTINATIONS':
      return {
        ...state,
        isFetching: false,
        destinations: payload,
      };

    case 'CREATING_CITY':
      return {
        ...state,
        isFetching: true,
      };
    case 'CITY_CREATED':
      return {
        ...state,
        isFetching: false,
        status: 'created',
      };
    case 'ERROR_CREATING_CITY':
      return {
        isFetching: false,
        destinations: payload,
      };

    case 'CREATING_COUNTRY':
      return {
        ...state,
        isFetching: true,
      };
    case 'COUNTRY_CREATED':
      return {
        ...state,
        isFetching: false,
        destinations: payload,
      };
    case 'ERROR_CREATING_COUNTRY':
      return {
        isFetching: false,
        destinations: payload,
      };

    default:
      return state;
  }
};

export default destinationsReducer;
