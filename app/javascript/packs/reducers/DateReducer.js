import types from '../actions/types'

const initialState = {
  isFetching: false,
  date: {
    country: '',
    cities: [],
  },
  status: '',
};

const dateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CREATING_DATE:
      return {
        ...state,
        isFetching: true,
      };
    case types.DATE_CREATED:
      return {
        ...state,
        isFetching: false,
        status: 'created',
      };
    case types.ERROR_SETTING_DATE:
      return {
        ...state,
        isFetching: false,
      };

    case types.DATE_SETUP:
      return {
        ...state,
        date: payload,
      };

    case types.DATE_STATE_RESET:
      return {
        ...state,
        status: '',
      }

    default:
      return {
        ...state,
      };
  }
};

export default dateReducer;
