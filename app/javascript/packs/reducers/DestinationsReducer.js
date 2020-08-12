import types from '../actions/types';

const initialState = {
  isFetching: false,
  destinations: [{}],
  status: '',
};

const destinationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FETCHING_DESTINATIONS:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVED_DESTINATIONS:
      return {
        ...state,
        isFetching: false,
        destinations: payload,
      };
    case types.ERROR_FETCHING_DESTINATIONS:
      return {
        ...state,
        isFetching: false,
        destinations: payload,
      };

    case types.CREATING_CITY:
      return {
        ...state,
        isFetching: true,
      };
    case types.CITY_CREATED:
      return {
        ...state,
        isFetching: false,
        status: 'created',
      };
    case types.ERROR_CREATING_CITY:
      return {
        isFetching: false,
        destinations: payload,
      };

    case types.CREATING_COUNTRY:
      return {
        ...state,
        isFetching: true,
      };
    case types.COUNTRY_CREATED:
      return {
        ...state,
        isFetching: false,
        destinations: [payload],
      };
    case types.ERROR_CREATING_COUNTRY:
      return {
        isFetching: false,
        destinations: payload,
      };

    default:
      return state;
  }
};

export default destinationsReducer;
