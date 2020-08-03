const initialState = {
  isFetching: false,
  user: {},
  date: {
    country: '',
    cities: [],
  },
};

const dateReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CREATING_DATE':
      return {
        ...state,
        isFetching: true,
      };
    case 'DATE_CREATED':
      return {
        ...state,
        isFetching: false,
        user: payload.user,
      };
    case 'ERROR_SETTING_DATE':
      return {
        ...state,
        isFetching: false,
      };

    case 'DATE_SETUP':
      return {
        ...state,
        date: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default dateReducer;
