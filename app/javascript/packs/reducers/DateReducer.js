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
    case 'CREATING_DATE':
      return {
        ...state,
        isFetching: true,
      };
    case 'DATE_CREATED':
      return {
        ...state,
        isFetching: false,
        status: 'created',
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
